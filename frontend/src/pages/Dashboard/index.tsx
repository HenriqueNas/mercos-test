import React, { 
  useState, 
  useEffect, 
} from 'react';

import { 
  FiTrash2, 
  FiArrowUpCircle, 
  FiArrowDownCircle, 
  FiDollarSign, 
} from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';
import Button from '../../components/Button';

import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';

import { 
  Container, 
  CardContainer, 
  Card, 
  TableContainer, 
  Form,
  ButtonGroup,
  FormButton,
} from './styles';
import { red, secondary } from '../../styles/colors';


interface Transaction {
  id?: string;
  title: string;
  value: number;
  formattedValue?: string;
  formattedDate?: string;
  type: 'income' | 'outcome';
  category: { title: string, id?: string };
  created_at?: Date;
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

const Dashboard: React.FC = () => {
  
  const [title, setTitle] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [type, setType] = useState<'income' | 'outcome'>('income');
  const [category, setCategory] = useState<string>('');

  const [inputError, setInputError] = useState('');

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  async function handleAddTrans(): Promise<void> {
    if (!title || !value || !category) {
      setInputError('Complete as informações');
      return;
    }
    const trans: Transaction = {
      title: title,
      value: value,
      category: {title: category},
      type: type,
    };

    try {
      await api.post(`/transactions`, trans).then(response => {
        setTransactions([...transactions, response.data.transaction]);
        setBalance(response.data.balance);
      });

      setTitle('')
      setValue(0)
      setCategory('')

      setInputError('');
    } catch (error) {
      setInputError('Erro ao inserir transação');
    }
  }

  async function handleRemoveTrans(id: string): Promise<void> {
    api.delete(`/transactions/${id}`).then(response => {
      setTransactions(response.data.transactions);
      setBalance(response.data.balance);
    });
  }

  async function setIncome(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): Promise<void> {
    event.preventDefault();
    setType('income')

    handleAddTrans();
  }

  async function setOutcome(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): Promise<void> {
    event.preventDefault();
    setType('income')

    handleAddTrans();
  }

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      api.get('/transactions').then(response => {
        setTransactions(response.data.transactions);
        setBalance(response.data.balance);
      });
    }
    
    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <FiArrowUpCircle size={32} color={secondary}></FiArrowUpCircle>
            </header>
            <h1 data-testid="balance-income">{formatValue(balance.income)}</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <FiArrowDownCircle size={32} color={red}></FiArrowDownCircle>
            </header>
            <h1 data-testid="balance-outcome">
              {formatValue(balance.outcome)}
            </h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <FiDollarSign size={32}></FiDollarSign>
            </header>
            <h1 data-testid="balance-total">{formatValue(balance.total)}</h1>
          </Card>
        </CardContainer>


        <Form hasError={!!inputError} onSubmit={() => null}>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Títulos"
          />
          <input
            type="text"
            value={value}
            onChange={e => setValue(Number(e.target.value))}
            placeholder="Valor"
          />
          <input
            type="text"
            value={category}
            onChange={e => setCategory(e.target.value)}
            placeholder="Categoria"
          />
          <ButtonGroup>
            <FormButton onClick={setIncome}>Entrada</FormButton>
            <FormButton onClick={setOutcome}>Saída</FormButton>
          </ButtonGroup>
        </Form>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {transactions.slice(0).reverse().map(trans => (
                <tr key={trans.id}>
                  <td className="title">{trans.title}</td>
                  <td className={trans.type}>
                    {trans.type === 'income'
                      ? formatValue(trans.value)
                      : `- ${formatValue(trans.value)}`}
                  </td>
                  <td>{trans.category.title}</td>
                  <td>{formatDate(trans.created_at ?? new Date )}</td>
                  <td>
                    <Button 
                      kind='icon' 
                      onClick={() => handleRemoveTrans(trans.id?? 'asdf')} 
                      type="button" 
                    >
                      <FiTrash2></FiTrash2>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
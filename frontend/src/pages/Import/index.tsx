import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';
import Button from '../../components/Button';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    const data = new FormData();

    uploadedFiles.map(file => {
      data.append('file', file.file);
    });

    try {
      await api.post('/transactions/import', data);
      setUploadedFiles([]);
      history.push('/');
    } catch (err) {
      console.log(err);        
    }
  }

  function submitFile(files: File[]): void {
    const newFiles: FileProps[] = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size, { output: 'string' }),
    }));
    setUploadedFiles(newFiles);
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <Button kind='text' onClick={handleUpload} type="button" >
              Enviar
            </Button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;

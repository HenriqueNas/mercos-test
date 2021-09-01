/**
 * Format number to Brazilian money
 *
 * @param value input value
 */
const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;

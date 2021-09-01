import { format } from 'date-fns';

/**
 * Format Date to dd/MM/yyyy
 *
 * @param date input date to treat
 */
const formatDate = (date: Date): string => format(new Date(date), 'dd/MM/yyyy');

export default formatDate;

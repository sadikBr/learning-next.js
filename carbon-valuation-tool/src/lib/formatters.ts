import { format } from 'date-fns';
import numeral from 'numeral';

export function formatDate(date: Date) {
  return format(new Date(date), 'EEEE, MMMM dd, yyyy');
}

export function formatNumber(number: number) {
  return numeral(number).format('$0.000a');
}

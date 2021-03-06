import moment from 'moment';

import { DEFAULT_DATE_FORMAT } from 'constants/date';

export function dateFormat(date) {
  return moment(date).format(DEFAULT_DATE_FORMAT);
}

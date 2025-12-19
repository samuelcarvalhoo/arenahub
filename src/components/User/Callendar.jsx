import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

export default function BasicDateCalendar({ value, onChange, className }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <DateCalendar 
        className={className}
        value={value ? dayjs(value) : null}
        onChange={onChange}
        disablePast
      />
    </LocalizationProvider>
  );
}
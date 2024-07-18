import { DatePicker } from './DatePicker';

export default {
  title: 'Atomos/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const DefaultDatePicker = {
  args: {
    label: 'Seleccionar Fecha',
    name: 'default-date-picker',
    value: '',
    onChange: (e) => { console.log('Fecha cambiada:', e.target.value); },
  },
};

export const DatePickerWithLabel = {
  args: {
    label: 'Selector de Fecha con Etiqueta',
    name: 'label-date-picker',
    value: '',
    onChange: (e) => { console.log('Fecha cambiada:', e.target.value); },
  },
};

export const PreSelectedDatePicker = {
  args: {
    label: 'Selector de Fecha con Fecha Preseleccionada',
    name: 'preselected-date-picker',
    value: '2024-01-01',
    onChange: (e) => { console.log('Fecha cambiada:', e.target.value); },
  },
};

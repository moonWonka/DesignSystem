import { Checkbox } from './Checkbox';

export default {
  title: 'Atomos/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Unchecked = {
  args: {
    name: 'checkbox',
    value: 'value1',
    checked: false,
    label: 'Unchecked Checkbox',
    onChange: () => { console.log('Checkbox clicked'); },
  },
};

export const Checked = {
  args: {
    name: 'checkbox',
    value: 'value2',
    checked: true,
    label: 'Checked Checkbox',
    onChange: () => { console.log('Checkbox clicked'); },
  },
};

export const WithCustomLabel = {
  args: {
    name: 'custom-checkbox',
    value: 'value3',
    checked: false,
    label: 'Custom Label Checkbox',
    onChange: () => { console.log('Checkbox clicked'); },
  },
};

import { Input } from './Input';

export default {
  title: 'Atomos/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Name',
    name: 'name',
    value: '',
    placeholder: 'Enter your name',
    type: 'text',
    onChange: () => { console.log('Input changed'); },
  },
};

export const Email = {
  args: {
    label: 'Email',
    name: 'email',
    value: '',
    placeholder: 'Enter your email',
    type: 'email',
    onChange: () => { console.log('Input changed'); },
  },
};

export const WithInitialValue = {
  args: {
    label: 'Username',
    name: 'username',
    value: 'john_doe',
    placeholder: 'Enter your username',
    type: 'text',
    onChange: () => { console.log('Input changed'); },
  },
};

export const Number = {
  args: {
    label: 'Age',
    name: 'age',
    value: '25',
    placeholder: 'Enter your age',
    type: 'number',
    onChange: () => { console.log('Input changed'); },
  },
};

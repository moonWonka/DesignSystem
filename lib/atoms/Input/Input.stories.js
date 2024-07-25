import { Input } from './Input';
import { fn } from '@storybook/test';

// Configuración general para el componente
export default {
  title: 'Atomos/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
};

// Historias específicas

export const TextInput = {
  args: {
    type: 'text',
    label: 'Text Input',
    name: 'text-input',
    value: '',
    placeholder: 'Enter text here',
  },
};

export const NumberInput = {
  args: {
    type: 'number',
    label: 'Number Input',
    name: 'number-input',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    placeholder: 'Enter number here',
  },
};

export const EmailInput = {
  args: {
    type: 'email',
    label: 'Email Input',
    name: 'email-input',
    value: '',
    placeholder: 'Enter your email',
  },
};

export const PasswordInput = {
  args: {
    type: 'password',
    label: 'Password Input',
    name: 'password-input',
    value: '',
    placeholder: 'Enter your password',
  },
};

export const RutInput = {
  args: {
    type: 'rut',
    label: 'RUT Input',
    name: 'rut-input',
    value: '',
    placeholder: 'Enter RUT here',
  },
};

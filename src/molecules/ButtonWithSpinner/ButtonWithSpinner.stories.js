// ButtonWithSpinner.stories.js
import { ButtonWithSpinner } from './ButtonWithSpinner';
import { fn } from '@storybook/test';

// Configuración general para el componente
export default {
  title: 'Moleculas/ButtonWithSpinner',
  component: ButtonWithSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isLoading: true,
    buttonProps: { onClick: fn() },
    containerProps: { className: 'storybook-container' },
  },
};

// Historias específicas
export const PrimaryContainerWithButton = {
  args: {
    buttonProps: {
      primary: true,
      label: 'Button',
      backgroundColor: "#7251a8",
    },
  },
};

export const SecondaryContainerWithButton = {
  args: {
    buttonProps: {
      label: 'Button Secondary',
      backgroundColor: "orange",
    },
  },
};

export const LargeContainerWithButton = {
  args: {
    buttonProps: {
      size: 'large',
      label: 'Button',
    },
  },
};

export const SmallContainerWithButton = {
  args: {
    buttonProps: {
      size: 'small',
      label: 'Button',
    },
  },
};

export const WarningContainerWithButton = {
  args: {
    buttonProps: {
      primary: true,
      label: 'Delete now',
      backgroundColor: 'red',
    },
  },
};

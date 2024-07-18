import { ContainerWithButton } from './ContainerWithButton';
import { fn } from '@storybook/test';

// Configuración general para el componente
export default {
  title: 'Moleculas/ContainerWithButton',
  component: ContainerWithButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    containerClassName: 'storybook-container',
    buttonProps: { onClick: fn() },
  },
};

// Historias específicas
export const PrimaryContainerWithButton = {
  args: {
    buttonProps: {
      primary: true,
      label: 'Button',
      backgroundColor: "#7251a8"
    },
  },
};

export const SecondaryContainerWithButton = {
  args: {
    buttonProps: {
      label: 'Button Secondary',
      backgroundColor: "orange"
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

import { ModalDs } from './ModalDs'
import { fn } from '@storybook/test';


export default {
  title: 'Moleculas/ModalDs',
  component: ModalDs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClose: fn(),
  },
};

export const DefaultModal = {
  args: {
    isOpen: true,
    title: 'Título del Modal',
    content: 'Este es el contenido del modal.',
    size: 'normal',
  },
};

export const ModalWithCustomContent = {
  args: {
    isOpen: true,
    title: 'Modal con Contenido Personalizado',
    content: "Contenido personalizado dentro del modal",
    size: 'normal',
  },
};

export const ModalWithoutTitle = {
  args: {
    isOpen: true,
    content: 'Este es un modal sin título.',
    size: 'normal',
  },
};

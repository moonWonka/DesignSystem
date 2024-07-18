import { Container } from './Container';

export default {
  title: 'Atomos/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'This is a default container',
  },
};

export const WithCustomClass = {
  args: {
    children: 'This container has custom class applied',
    className: 'custom-container-class',
  },
};



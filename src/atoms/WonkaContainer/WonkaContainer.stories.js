import { WonkaContainer } from './WonkaContainer';

export default {
  title: 'Atomos/WonkaContainer',
  component: WonkaContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    className: '',
  },
};

export const WithCustomClass = {
  args: {
    className: 'custom-wonka-container-class',
  },
};  

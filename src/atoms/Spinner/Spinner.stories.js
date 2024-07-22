import { Spinner } from './Spinner';

export default {
  title: 'Atomos/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    size: 'medium',
    color: '#7251a8',
  },
};

export const Large = {
  args: {
    size: 'large',
    color: '#7251a8',
  },
};

export const Small = {
  args: {
    size: 'small',
    color: '#7251a8',
  },
};

export const CustomColor = {
  args: {
    size: 'small',
    color: 'c4aad3',
  },
};

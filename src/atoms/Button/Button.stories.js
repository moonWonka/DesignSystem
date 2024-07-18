import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Atomos/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: "#7251a8"
  },
};

export const Secondary = {
  args: {
    label: 'Button Secondary',
    backgroundColor: "orange"
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};


export const Warning = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  }
};

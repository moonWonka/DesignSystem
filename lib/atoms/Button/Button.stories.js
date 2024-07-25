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
  argTypes: {
    backgroundColor: { control: 'color' },
  },
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
    backgroundColor: "#c4aad3"
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'large Button',
    backgroundColor: "#8f6fb7",
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
    backgroundColor: "#aa8dc5",
    primary: false
  },
};

export const Delete = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: '#ff6961',
  }
};

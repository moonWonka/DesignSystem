import { Heading } from './Heading';

export default {
  title: 'Atomos/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    level: { control: 'radio' },
    color: { control: 'color' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    level: 2,
    text: "Texto Prueba",
  },
};

export const Heading1 = {
  args: {
    level: 1,
    text: 'Heading 1',
    color: '#7251a8',
  },
};

export const Heading2 = {
  args: {
    level: 2,
    text: 'Heading 2',
    color: '#8f6fb7',
  },
};

export const Heading3 = {
  args: {
    level: 3,
    text: 'Heading 3',
    color: '#aa8dc5',
  },
};

export const CustomHeading = {
  args: {
    level: 4,
    text: 'Custom Heading',
    color: '#ff6961',
  },
};

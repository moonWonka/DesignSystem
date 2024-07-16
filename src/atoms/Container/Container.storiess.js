import { Container } from './Container';

export default {
  title: 'Atomos/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a default container',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  children: 'This container has custom class applied',
  className: 'custom-container-class',
};

export const WithNestedElements = Template.bind({});
WithNestedElements.args = {
  children: (
    <div>
      <p>This container has nested elements:</p>
      <button>Button inside container</button>
      <input type="text" placeholder="Input inside container" />
    </div>
  ),
};

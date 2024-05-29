import Button from './Button';

export default {
  title: 'MUI Usage/Button',
  component: Button,
};

export const ButtonSample = {
  args: {
    children: 'This is a button',
    variant: 'contained',
    title: 'Click me',
    ariaLabel: 'Sample click button',
  },
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
    },
  },
};

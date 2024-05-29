import TextField from './Textfield';

export default {
  title: 'MUI Usage/TextField',
  component: TextField,
};

export const TextFieldSample = {
  args: {
    label: 'Textfield sample',
    variant: 'standard',
    size: 'normal',
  },
  argTypes: {
    variant: {
      options: ['filled', 'standard'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'normal'],
      control: { type: 'radio' },
    },
  },
};

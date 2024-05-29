import Checkbox from './Checkbox';

export default {
  title: 'MUI Usage/Checkbox',
  component: Checkbox,
};

export const CheckboxSample = {
  args: {
    id: 'Check123',
    name: 'Check123',
    label: 'Checkbox sample',
    checked: false,
    alignItems: 'start',
  },
  argTypes: {
    alignItems: {
      options: ['start', 'center', 'end', 'stretch'],
      control: { type: 'radio' },
    },
  },
};

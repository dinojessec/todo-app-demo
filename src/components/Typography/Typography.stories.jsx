import Typography from './Typography';

export default {
  title: 'MUI Usage/Typography',
  component: Typography,
};

export const TypographySample = {
  args: {
    variant: 'body1',
    children: 'This is typography sample',
  },
  argTypes: {
    variant: {
      options: [
        'body1',
        'body2',
        'caption',
        'greeting',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'overline',
      ],
      control: { type: 'radio' },
    },
  },
};

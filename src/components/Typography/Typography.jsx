import React from 'react';
import PropTypes from 'prop-types';

import { Typography as MuiTypography } from '@mui/material';

const Typography = ({ children, ...props }) => {
  const { variant } = props;
  return <MuiTypography variant={variant}>{children}</MuiTypography>;
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
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
  ]),
};

export default Typography;

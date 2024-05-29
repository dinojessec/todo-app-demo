import React from 'react';
import PropTypes from 'prop-types';

import { TextField as MuiTextField } from '@mui/material';

const TextField = ({ ...props }) => {
  const { label, size, variant } = props;
  return (
    <MuiTextField
      hiddenLabel
      label={label}
      size={size}
      variant={variant}
    ></MuiTextField>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'standard']),
  size: PropTypes.oneOf(['small', 'normal']),
};

export default TextField;

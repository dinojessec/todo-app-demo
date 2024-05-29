import React from 'react';
import { Input as MuiInput } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

const Input = ({ ...props }) => {
  const { handleOnChangeInput, value } = props;
  return (
    <MuiInput
      inputProps={ariaLabel}
      value={value}
      onChange={handleOnChangeInput}
    />
  );
};

export default Input;

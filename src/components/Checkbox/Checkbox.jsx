import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox as MuiCheckbox, Stack } from '@mui/material';
import Typography from '../Typography/Typography';

const Checkbox = ({ ...props }) => {
  const { id, name, label, checked, onChange } = props;
  return (
    <Stack display="flex" direction="row" gap={1} alignItems="center">
      <MuiCheckbox id={id} name={name} checked={checked} onChange={onChange} />
      <Typography variant="body1">{label}</Typography>
    </Stack>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;

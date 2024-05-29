import React from 'react';
import PropTypes from 'prop-types';

import { Button as MuiButton } from '@mui/material';

const Button = ({ children, ...props }) => {
  const { ariaLabel, type, title, variant, onClick } = props;
  return (
    <MuiButton
      type={type}
      aria-label={ariaLabel}
      title={title}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(['submit']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  onClick: PropTypes.func.isRequired,
};

export default Button;

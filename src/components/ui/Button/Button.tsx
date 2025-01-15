'use client';
import { Button as ButtonMUI, SxProps, CircularProgress } from '@mui/material';
import { ButtonTextType } from 'constants/ui';
import {
  outlinedWhiteButton,
  containedWhiteButton,
  containedBlueButton,
} from './themes';

interface ButtonProps {
  text: ButtonTextType;
  outlinedWhite?: boolean;
  containedWhite?: boolean;
  containedBlue?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

type variantType = 'outlined' | 'contained';

function Button({
  text,
  outlinedWhite,
  containedWhite,
  containedBlue,
  disabled,
  loading = false,
  type = 'button',
  onClick = () => {},
}: ButtonProps) {
  let variant: variantType;
  let theme: SxProps;

  switch (true) {
    case outlinedWhite:
      variant = 'outlined';
      theme = outlinedWhiteButton;
      break;
    case containedWhite:
      variant = 'contained';
      theme = containedWhiteButton;
      break;
    case containedBlue:
      variant = 'contained';
      theme = containedBlueButton;
      break;
    default:
      variant = 'outlined';
      theme = null;
      break;
  }

  return (
    <ButtonMUI
      variant={variant}
      sx={theme}
      disableTouchRipple
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {loading ? <CircularProgress size={24} color='inherit' /> : text}
    </ButtonMUI>
  );
}

export default Button;

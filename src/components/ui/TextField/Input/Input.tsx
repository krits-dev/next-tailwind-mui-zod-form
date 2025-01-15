import { ControllerRenderProps } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { InputLabelType } from 'constants/ui';
import { outlinedInputTheme } from '../themes/outlinedInputTheme';
import { referralCodeIconProps } from '../props/referralCodeIconProps';
import { LoginFormData } from 'modules/AuthForm/components/LoginForm';

interface InputProps {
  label: InputLabelType;
  error?: boolean;
  helperText?: string;
  referral?: boolean;
  maxLength?: number;
  renderProps: ControllerRenderProps<LoginFormData>;
}

function Input({
  label,
  error,
  helperText,
  referral,
  maxLength = 80,
  renderProps,
}: InputProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    renderProps?.onChange(value);
  };

  const slotProps = referral
    ? referralCodeIconProps(renderProps?.value || '')
    : {};

  return (
    <div>
      <TextField
        label={label}
        variant='outlined'
        type='text'
        autoComplete='off'
        sx={outlinedInputTheme}
        slotProps={{
          htmlInput: { maxLength },
          ...slotProps,
        }}
        error={error}
        helperText={helperText}
        onChange={handleInputChange}
        value={renderProps?.value}
      />
    </div>
  );
}
export default Input;

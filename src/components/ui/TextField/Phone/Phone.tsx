'use client';
import { ControllerRenderProps } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { InputLabel, InputLabelType } from 'constants/ui';
import { outlinedInputTheme } from '../themes/outlinedInputTheme';
import { LoginFormData } from 'modules/AuthForm/components/LoginForm';

interface PhoneProps {
  label?: InputLabelType;
  error?: boolean;
  helperText?: string;
  referral?: string;
  maxLength?: number;
  renderProps: ControllerRenderProps<LoginFormData>;
}

function Phone({
  label = InputLabel.phone,
  error,
  helperText,
  maxLength = 16,
  renderProps,
}: PhoneProps) {
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phoneValue = `+7 ${e.target.value
      .replace(/[^\d]/g, '')
      .replace(/^7/, '')
      .replace(/(\d{3})(\d{0,3})(\d{0,2})(\d{0,2})/, '$1 $2 $3 $4')
      .trim()}`;

    renderProps?.onChange(phoneValue);
  };

  const handleFocus = () => {
    if (renderProps?.value && !renderProps?.value.startsWith('+7 ')) {
      renderProps?.onChange('+7 ');
    }
  };

  const handleBlur = () => {
    if (renderProps?.value === '+7 ') {
      renderProps?.onChange('');
    }
  };

  const slotProps = {};

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
        onChange={handlePhoneChange}
        value={renderProps.value}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}
export default Phone;

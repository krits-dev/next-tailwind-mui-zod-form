'use client';
import { FieldErrors, ControllerRenderProps } from 'react-hook-form';
import { useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { InputLabel } from 'constants/ui';
import { outlinedInputTheme } from '../themes/outlinedInputTheme';
import { passwordIconProps } from '../props/passwordIconProps';
import { LoginFormData } from 'modules/AuthForm/components/LoginForm';
import { Validation } from './Validation';
import { PasswordMessages } from './Validation';

interface PasswordProps {
  watchedEmail?: string;
  errorMessages: FieldErrors<LoginFormData>;
  renderProps: ControllerRenderProps<LoginFormData>;
}

function Password({ watchedEmail, errorMessages, renderProps }: PasswordProps) {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    renderProps?.onChange(value);
  };

  const passwordIcon = passwordIconProps(
    renderProps?.value ?? '',
    showPassword,
    handleShowPassword
  );

  const error = errorMessages?.password?.message === PasswordMessages.required;

  return (
    <div>
      <TextField
        label={InputLabel.password}
        variant='outlined'
        type={showPassword ? 'text' : 'password'}
        autoComplete='off'
        sx={outlinedInputTheme}
        slotProps={passwordIcon}
        error={error}
        helperText=''
        value={renderProps?.value}
        onChange={handleChange}
      />
      <Validation
        passwordValue={renderProps?.value || ''}
        watchedEmailValue={watchedEmail || ''}
        error={error}
      />
    </div>
  );
}
export default Password;

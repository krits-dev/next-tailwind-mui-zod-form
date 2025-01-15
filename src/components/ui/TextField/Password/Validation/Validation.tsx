import { Icon } from './components';
import { isEmail, normalizeString } from 'assets/utils';
import { ReactNode } from 'react';
import cn from 'classnames';

export const PasswordMessages = {
  required: 'Enter password',
  email: 'Can’t contain e-mail address',
  characters: 'At least 8 characters',
  number: 'Contains a number or(and) symbol',
  capitalized: 'One or more capitalized letter',
} as const;

interface ValidationProps {
  passwordValue: string;
  watchedEmailValue: string;
  error: boolean;
}

function Validation({
  passwordValue,
  watchedEmailValue,
  error,
}: ValidationProps) {
  const isEmailValid =
    isEmail(watchedEmailValue) &&
    !normalizeString(passwordValue).includes(
      normalizeString(watchedEmailValue.split('@')[0])
    );

  const isCharactersValid = passwordValue.length >= 8;
  const isNumberValid = /[\d\W_]/.test(passwordValue);
  const isCapitalizedValid = /[A-Z]/.test(passwordValue);

  const passwordRules = [
    {
      message: PasswordMessages.email,
      isValid: isEmailValid,
    },
    {
      message: PasswordMessages.characters,
      isValid: isCharactersValid,
    },
    {
      message: PasswordMessages.number,
      isValid: isNumberValid,
    },
    {
      message: PasswordMessages.capitalized,
      isValid: isCapitalizedValid,
    },
  ];

  const isValidPassword = passwordRules.every(rule => rule.isValid);

  let passwordStrength: ReactNode;
  if (passwordValue?.length === 0) {
    passwordStrength = '';
  } else if (passwordValue?.length > 0 && !isValidPassword) {
    passwordStrength = <span className='text-red'>Weak password :(</span>;
  } else if (passwordValue?.length > 0 && isValidPassword) {
    passwordStrength = <span className='text-green'>Strong password :)</span>;
  }

  return (
    <div className='w-full text-helper pt-1'>
      <p className='pb-2 text-gray-300'>
        {!error ? (
          <>Password strength: {passwordStrength}</>
        ) : (
          <span className='text-red'>{PasswordMessages.required}</span>
        )}
      </p>
      {passwordRules?.map(rule => {
        return (
          <p key={rule.message} className='flex gap-2'>
            <Icon isValid={rule.isValid} passwordValue={passwordValue} />
            <span
              className={cn({
                'text-gray-300': passwordValue?.length === 0,
                'text-red': !rule.isValid && passwordValue?.length > 0,
                'text-green': rule.isValid && passwordValue?.length > 0,
              })}
            >
              {rule.message}
            </span>
          </p>
        );
      })}
    </div>
  );
}

export default Validation;

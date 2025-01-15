import { MouseEvent } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import { Button } from 'components/ui/Button';
import { ButtonText } from 'constants/ui';
import Image from 'next/image';
import passwordHiddenIcon from 'assets/images/password-hidden-icon.svg';
import passwordVisibleIcon from 'assets/images/password-visible-icon.svg';

export const passwordIconProps = (
  value: string,
  showPassword: boolean,
  handleClickShowPassword: () => void
) => {
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) =>
    event.preventDefault();

  const handleMouseUpPassword = (event: MouseEvent<HTMLButtonElement>) =>
    event.preventDefault();

  return {
    input: {
      endAdornment: (
        <InputAdornment position='end'>
          {value?.length > 0 ? (
            <IconButton
              disableRipple
              aria-label={
                showPassword ? 'hide the password' : 'display the password'
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge='start'
            >
              <Image
                src={showPassword ? passwordVisibleIcon : passwordHiddenIcon}
                alt={showPassword ? 'hide password icon' : 'show password icon'}
              />
            </IconButton>
          ) : (
            <Button text={ButtonText.generate} outlinedWhite />
          )}
        </InputAdornment>
      ),
    },
  };
};

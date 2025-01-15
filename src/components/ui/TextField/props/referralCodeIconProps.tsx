import { InputAdornment } from '@mui/material';
import Image from 'next/image';
import doneIcon from 'assets/images/done-icon.svg';

export const referralCodeIconProps = (value: string) => {
  if (value.length > 0) {
    return {
      input: {
        endAdornment: (
          <InputAdornment position='end'>
            <Image src={doneIcon} alt='code is correct' />
          </InputAdornment>
        ),
      },
    };
  }

  return {};
};

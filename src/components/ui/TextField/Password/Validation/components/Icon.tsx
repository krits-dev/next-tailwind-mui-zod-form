'use client';
import Image from 'next/image';
import done from 'assets/images/done-icon.svg';
import failureGray from 'assets/images/close-gray-icon.svg';
import failureRed from 'assets/images/close-red-icon.svg';

interface IconProps {
  isValid: boolean;
  passwordValue: string;
}

function Icon({ isValid, passwordValue }: IconProps) {
  let src;
  if (passwordValue?.length === 0) {
    src = failureGray;
  } else if (!isValid && passwordValue?.length > 0) {
    src = failureRed;
  } else if (isValid && passwordValue?.length > 0) {
    src = done;
  }

  return (
    <Image
      src={src}
      width={16}
      height={16}
      alt={isValid ? 'done icon' : 'failure icon'}
    />
  );
}
export default Icon;

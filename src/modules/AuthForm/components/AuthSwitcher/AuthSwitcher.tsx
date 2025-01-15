'use client';
import { useState } from 'react';
import { Button } from 'components/ui/Button';
import { ButtonText } from 'constants/ui';

function AuthSwitcher() {
  const [auth, setAuth] = useState<boolean>(true);

  const handleChange = () => {
    setAuth(prev => !prev);
  };
  return (
    <div className='w-full flex p-1 space-x-2 rounded-xl bg-white-100'>
      <div className='w-1/2'>
        <Button
          text={ButtonText.signin}
          containedWhite
          disabled={!auth}
          onClick={handleChange}
        />
      </div>
      <div className='w-1/2'>
        <Button
          text={ButtonText.login}
          containedWhite
          disabled={auth}
          onClick={handleChange}
        />
      </div>
    </div>
  );
}
export default AuthSwitcher;

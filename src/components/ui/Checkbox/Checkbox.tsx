import { Checkbox as CheckboxMUI } from '@mui/material';
import Image from 'next/image';
import checked from 'assets/images/checkbox-on.svg';
import unchecked from 'assets/images/checkbox-off.svg';

function Checkbox() {
  const icon = <Image src={checked} alt='checkbox checked' />;
  const checkedIcon = <Image src={unchecked} alt='checkbox unchecked' />;

  return (
    <div>
      <CheckboxMUI
        disableRipple
        icon={icon}
        checkedIcon={checkedIcon}
        sx={{
          padding: 0,
          margin: 0,
        }}
      />
    </div>
  );
}
export default Checkbox;

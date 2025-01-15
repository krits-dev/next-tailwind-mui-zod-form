import Link from 'next/link';
import Image from 'next/image';
import logo from 'assets/images/logo.svg';

function Logo() {
  return (
    <div>
      <Link href='#'>
        <Image
          src={logo}
          alt='mind-money logo'
          className='md:w-59.5 md:h-11 sm:w-36.5 sm:h-8'
        />
      </Link>
    </div>
  );
}
export default Logo;

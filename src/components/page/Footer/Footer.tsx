import Link from 'next/link';

function Footer() {
  const copyright = '© 2024 mind money limited';

  return (
    <footer className='hidden xl:px-8 lg:px-6 lg:pr-16 lg:py-16 md:py-8 md:px-6 md:block'>
      <div className='flex items-end justify-between text-content text-gray-300'>
        <p>{copyright.toUpperCase()}</p>
        <p className='text-right'>
          Have some issue?
          <br className='xl:hidden lg:block md:hidden' /> Wrote us
          <Link className='text-blue' href='#'>
            {' '}
            info@mind-money.eu
          </Link>
        </p>
      </div>
    </footer>
  );
}
export default Footer;

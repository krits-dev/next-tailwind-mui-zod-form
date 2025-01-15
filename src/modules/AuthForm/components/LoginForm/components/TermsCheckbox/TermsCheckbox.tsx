import { Checkbox } from 'components/ui/Checkbox';
import Link from 'next/link';

function TermsCheckbox() {
  return (
    <div className='flex items-center space-x-3'>
      <Checkbox />
      <p className='text-content text-gray-300'>
        I accept the
        <Link className='text-blue' href='#'>
          {' '}
          Therms of Use{' '}
        </Link>
        and have read
        <br className='md:hidden sm:block' />
        <Link className='text-blue' href='#'>
          {' '}
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
export default TermsCheckbox;

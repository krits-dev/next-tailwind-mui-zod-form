import { AuthSwitcher } from './components/AuthSwitcher';
import { LoginForm } from './components/LoginForm';

function AuthForm() {
  return (
    <div className='bg-white-50 h-auto lg:border lg:border-gray-200 lg:rounded-2xl lg:w-129.5 md:w-140 md:space-y-12 md:px-10 md:py-12 sm:space-y-8 sm:py-4 sm:px-4 sm:w-full'>
      <AuthSwitcher />
      <LoginForm />
    </div>
  );
}
export default AuthForm;

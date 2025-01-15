import { Header } from 'components/page/Header';
import { Footer } from 'components/page/Footer';
import { Title } from 'components/ui/Title';
import { LoginPage } from 'constants/pages';
import authBackground from 'assets/images/auth-background.png';
import Image from 'next/image';

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-screen'>
      <div className='w-full lg:w-1/2 lg:bg-gray-50'>
        <div className='h-full w-full flex flex-col xl:max-w-212.5 lg:max-w-151 lg:ml-auto'>
          <Header />
          <main className='min-w-90 w-full md:flex md:items-center xl:pr-41.5 lg:pr-16 lg:justify-end md:flex-1 md:justify-center'>
            {children}
          </main>
          <Footer />
        </div>
      </div>
      <div className='hidden relative lg:p-16 lg:pr-0 lg:block w-1/2'>
        <div className='relative z-10 mt-23'>
          <Title h1 className='text-white-50' titleText={LoginPage.title} />
          <p className='text-white-50 mt-6'>
            {LoginPage.text.row1}
            <br />
            {LoginPage.text.row2}
          </p>
        </div>
        <Image
          className='object-cover'
          alt='authentication background'
          src={authBackground}
          quality={100}
          fill
          priority
          sizes='100vh'
        />
      </div>
    </div>
  );
}

export default AuthLayout;

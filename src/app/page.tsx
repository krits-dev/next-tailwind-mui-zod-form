import { redirect } from 'next/navigation';
import { auth } from 'constants/routes';

function Home() {
  redirect(auth.login);
}
export default Home;

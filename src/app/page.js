import Hero from '@/components/home/Hero';
import Store from '@/components/home/Store';
import { Oswald, Roboto } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main className="flex w-full max-w-[1280px] flex-col items-center px-7">
      <Hero />
      <Store />
    </main>
  );
}

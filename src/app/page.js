import { Oswald, Roboto } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main className="flex w-full max-w-[1280px] flex-col items-center px-7">
      <div className="flex w-full flex-col border-y-4 border-black py-14">
        <h1
          className={`${oswald.className} mb-4 text-5xl font-medium lg:text-6xl`}
        >
          PRINTS
        </h1>
        <p
          className={`${roboto.className} text-xs leading-relaxed md:w-[70vw] md:text-sm lg:w-[55vw] xl:w-[30vw]`}
        >
          We take pride in the quality of our products and use only the highest
          quality materials to ensure that each poster is durable and
          long-lasting. Browse our collection and discover the perfect geometric
          poster to add a touch of sophistication to your home or office.
        </p>
      </div>
    </main>
  );
}

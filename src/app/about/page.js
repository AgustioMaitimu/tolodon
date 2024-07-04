import React from 'react';
import { Oswald, Roboto } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
import Link from 'next/link';

function Blog() {
  return (
    <div
      className={`${roboto.className} mb-20 mt-14 flex w-full max-w-[650px] flex-col items-center gap-16 px-7`}
    >
      <div className="flex flex-col gap-6 ">
        <Link
          href="/blog/1"
          className={`${oswald.className} text-2xl decoration-2 hover:underline xl:text-3xl`}
        >
          About
        </Link>
        <p className="text-[#3B3B3B] xl:text-lg">
          Our shop specializes in creating and selling unique and eye-catching
          geometric posters that are perfect for adding a touch of modern style
          to any space. Our posters are designed by skilled artists who are
          passionate about creating striking visual compositions that are both
          beautiful and thought-provoking. Whether you’re looking for a bold
          statement piece to decorate your living room or a series of smaller
          posters to create a gallery wall, we have a wide selection of designs
          to choose from. We take pride in the quality of our products and use
          only the highest quality materials to ensure that each poster is
          durable and long-lasting. Browse our collection and discover the
          perfect geometric poster to add a touch of sophistication to your home
          or office.
        </p>
      </div>
    </div>
  );
}

export default Blog;

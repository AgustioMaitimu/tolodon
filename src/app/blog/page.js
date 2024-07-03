import React from 'react';
import { Oswald, Roboto } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
import articles from '@/lib/articles';
import Link from 'next/link';

function Blog() {
  return (
    <div
      className={`${roboto.className} mb-20 mt-14 flex w-full max-w-[620px] flex-col items-center gap-16 px-7`}
    >
      <h1 className={`${oswald.className} self-start text-3xl xl:text-4xl`}>
        Blog
      </h1>
      <div className="flex flex-col gap-6 ">
        <Link
          href="/blog/1"
          className={`${oswald.className} text-2xl decoration-2 hover:underline xl:text-3xl`}
        >
          {articles[0].title}
        </Link>
        <p className="text-[#3B3B3B] xl:text-lg">{articles[0].preview}</p>
        <div className="flex gap-6 text-xs xl:text-sm">
          <p>{articles[0].author}</p>
          <p>{articles[0].date}</p>
          <p>{articles[0].category}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        <Link
          href="/blog/2"
          className={`${oswald.className} text-2xl decoration-2 hover:underline xl:text-3xl`}
        >
          {articles[1].title}
        </Link>
        <p className="text-[#3B3B3B] xl:text-lg">{articles[1].preview}</p>
        <div className="flex gap-6 text-xs xl:text-sm">
          <p>{articles[1].author}</p>
          <p>{articles[1].date}</p>
          <p>{articles[1].category}</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;

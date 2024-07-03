'use client';

import React, { useEffect, useState } from 'react';
import { Oswald, Roboto } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
import articles from '@/lib/articles';
import Link from 'next/link';

function Article() {
  const [articleBody, setArticleBody] = useState([]);

  useEffect(() => {
    const mapped = articles[0].body.map((x, index) => {
      return <h1 key={index}>{x}</h1>;
    });
    setArticleBody(mapped);
  }, []);

  return (
    <div
      className={`${roboto.className} mb-20 mt-14 flex w-full max-w-[620px] flex-col items-center gap-16 px-7`}
    >
      <div className="flex flex-col gap-6 ">
        <Link
          href="/blog/1"
          className={`${oswald.className} text-2xl xl:text-3xl`}
        >
          {articles[0].title}
        </Link>
        <div className="flex flex-col gap-6 text-[#3B3B3B] xl:text-lg">
          {articleBody}
        </div>
        <div className="flex gap-6 text-xs xl:text-sm">
          <p>{articles[0].author}</p>
          <p>{articles[0].date}</p>
          <p>{articles[0].category}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;

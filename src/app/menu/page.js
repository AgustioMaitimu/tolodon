import Link from 'next/link';
import React from 'react';
import { Roboto } from 'next/font/google';
import Image from 'next/legacy/image';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

function page() {
  return (
    <div
      className={`fixed top-0 flex h-screen w-screen flex-col items-end gap-[5vh] bg-white px-[8vh] py-[9vh] text-sm`}
    >
      <Link href="/" className="relative aspect-square w-6">
        <Image
          alt="exit"
          className="object-cover"
          layout="fill"
          src="/cross.svg"
        />
      </Link>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}

export default page;

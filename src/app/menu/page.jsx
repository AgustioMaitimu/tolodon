'use client';

import Link from 'next/link';
import React from 'react';
import { Roboto } from 'next/font/google';
import Image from 'next/legacy/image';
import { useRouter } from 'next/navigation';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

function Menu() {
  const router = useRouter();

  return (
    <div
      className={`fixed top-0 flex h-screen w-screen flex-col items-end gap-[5vh] bg-white px-[8vh] py-[9vh] text-sm`}
    >
      <div onClick={router.back} className="relative aspect-square w-6">
        <Image
          alt="exit"
          className="object-cover"
          layout="fill"
          src="/cross.svg"
        />
      </div>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}

export default Menu;

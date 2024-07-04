'use client';

import React from 'react';
import { Oswald, Roboto } from 'next/font/google';
import Image from 'next/legacy/image';
import Link from 'next/link';

const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Header() {
  return (
    <div className={`${roboto.className} flex w-full flex-col items-center`}>
      <h1 className="w-full bg-black px-7 py-2 text-center text-[12.5px] text-white">
        Free shipping on all orders over $50 ・ Use code tolodon24 at checkout
        to get 15% off
      </h1>
      <div className="flex w-full max-w-[1280px] items-center justify-between px-7 py-[14px]">
        <Link href="/" className={`${oswald.className} text-lg xl:text-xl`}>
          TOLODON
        </Link>
        <div className="flex items-center gap-5">
          <div className="mr-5 hidden gap-7 font-thin md:flex">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <Link
            href="/menu"
            scroll={false}
            className="relative h-7 w-4 md:hidden"
          >
            <Image
              alt=""
              src="/menu.svg"
              layout="fill"
              className="object-cover"
            />
          </Link>
          <div className="relative h-5 w-5">
            <Image
              alt=""
              src="/profile.svg"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="relative h-6 w-6">
            <Image
              alt=""
              src="/cart.svg"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

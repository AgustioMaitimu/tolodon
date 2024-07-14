import React from 'react';
import { Oswald, Roboto } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
import articles from '@/lib/articles';
import Link from 'next/link';

function Account() {
  return (
    <div
      className={`${roboto.className} mb-20 mt-14 flex w-full max-w-[1000px] flex-col items-center gap-16 px-7`}
    >
      <h1 className={`${oswald.className} self-start text-2xl xl:text-3xl`}>
        My account
      </h1>
      <div className="flex w-full flex-col gap-7">
        <h1 className={`${oswald.className} text-3xl xl:text-4xl`}>Login</h1>
        <div className="flex w-full max-w-[516px] flex-col gap-10 self-center">
          <div className="flex flex-col gap-7 font-light">
            <div className="flex flex-col gap-2">
              <label htmlFor="user/email">Username or email address *</label>
              <input
                type="text"
                id="user/email"
                name="user/email"
                className="w-full rounded border-[1px] border-black px-5 py-3"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded border-[1px] border-black px-5 py-3"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="aspect-square w-6 rounded accent-black"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6">
            <button className="rounded bg-black px-8 py-3 text-white">
              Log In
            </button>
            <p className="cursor-pointer underline decoration-1 underline-offset-2">
              Lost your password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;

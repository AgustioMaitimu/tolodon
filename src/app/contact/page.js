import React from 'react';
import { Oswald, Roboto } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
import Link from 'next/link';

function Contact() {
  return (
    <div
      className={`${roboto.className} mb-20 mt-14 flex w-full max-w-[650px] flex-col items-start gap-7 px-7`}
    >
      <h1 className={`${oswald.className} text-2xl xl:text-3xl`}>Contact</h1>
      <div className="flex w-full flex-col gap-2 text-[#3B3B3B]">
        <label htmlFor="fname">
          Name <span className="text-sm">(required)</span>
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          className="border-[0.1px] border-gray-400 p-2"
        />
      </div>
      <div className="flex w-full flex-col gap-2 text-[#3B3B3B]">
        <label htmlFor="fname">
          Email <span className="text-sm">(required)</span>
        </label>
        <input
          type="email"
          id="fname"
          name="fname"
          className="border-[0.1px] border-gray-400 p-2"
        />
      </div>
      <div className="flex w-full flex-col gap-2 text-[#3B3B3B]">
        <label htmlFor="fname">Message</label>
        <textarea
          id="fname"
          name="fname"
          rows={8}
          className="border-[0.1px] border-gray-400 px-3 py-2"
        />
      </div>
      <button className="rounded-md bg-black px-5 py-2 text-xs text-white">
        Contact Us
      </button>
    </div>
  );
}

export default Contact;

import React from 'react';
import { Oswald, Roboto } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

function Footer() {
  return (
    <div
      className={`${roboto.className} flex min-h-screen w-full items-center justify-center bg-black px-7 py-28 md:min-h-0 lg:px-20`}
    >
      <div className="flex w-full max-w-[1280px] flex-col gap-14 md:flex-row md:gap-8 lg:gap-16">
        <div className="flex flex-col gap-7 text-white md:max-w-[35vw] lg:max-w-[25vw]">
          <h1 className={`${oswald.className} text-xl`}>TOLODON</h1>
          <p className="text-sm">
            We are a poster shop bringing you carefully created and unique art
            prints. We are a curious and creative team based in Tokyo, Japan,
            and we believe in diversity, value and quality.
          </p>
          <div className="flex gap-5">
            <div className="relative aspect-square w-5 rounded bg-white"></div>
            <div className="relative aspect-square w-5 rounded bg-white"></div>
            <div className="relative aspect-square w-5 rounded bg-white"></div>
            <div className="relative aspect-square w-5 rounded bg-white"></div>
          </div>
        </div>
        <div className="flex flex-col gap-7 text-white md:max-w-[20vw]">
          <h1 className={`${oswald.className} text-xl`}>LOCATION</h1>
          <div className="flex flex-col gap-2 text-xs md:text-sm">
            <div>12-3 Udagawacho, Shibuya City, Tokyo 123-4567</div>
            <div>Mon – Fri 10 am – 7 pm</div>
            <div>Sat – Sun 12 am – 5 pm</div>
            <div>0123 456 7890</div>
          </div>
        </div>
        <div className="flex flex-col gap-7 text-white md:max-w-[15vw]">
          <h1 className={`${oswald.className} text-xl`}>SHOP</h1>
          <div className="flex flex-col gap-2 text-xs md:text-sm">
            <div>My Account</div>
            <div>Privacy Policy</div>
            <div>Refunds and Returns policy</div>
          </div>
        </div>
        <div className="flex flex-col gap-7 text-white">
          <h1 className={`${oswald.className} text-xl`}>INFO</h1>
          <div className="flex flex-col gap-2 text-xs md:text-sm">
            <div>Home</div>
            <div>Blog</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
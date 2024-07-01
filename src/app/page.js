'use client';

import Hero from '@/components/home/Hero';
import Item from '@/components/home/Item';
import { Oswald, Roboto } from 'next/font/google';
import { products } from '@/lib/products';
import { useEffect, useState } from 'react';

const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Home() {
  const [mappedProducts, setMappedProducts] = useState([]);

  useEffect(() => {
    const mapped = products.map((x, index) => {
      return (
        <Item
          name={x.name}
          realPrice={x.realPrice}
          hasDiscount={x.hasDiscount}
          discountPrice={x.discountPrice}
          description={x.description}
          colors={x.colors}
          size={x.size}
          image={x.image}
          key={index}
        >
          {x.name}
        </Item>
      );
    });
    setMappedProducts(mapped);
  }, []);

  return (
    <main className="flex w-full max-w-[1280px] flex-col items-center px-7">
      <Hero />
      <div
        className={`${roboto.className} mt-14 flex w-full flex-col justify-between gap-14 md:flex-row`}
      >
        <div className="flex flex-col gap-10 text-sm sm:px-[5vw] md:px-0 lg:w-72">
          <div className="flex flex-col gap-6">
            <h1 className={`${oswald.className} text-2xl`}>Color</h1>
            <div className="flex items-center gap-5">
              <input
                className="aspect-square h-6 accent-white"
                type="checkbox"
                id="black"
                name="black"
                value="black"
              />
              <label htmlFor="black">Black</label>
            </div>
            <div className="flex items-center gap-5">
              <input
                className="aspect-square h-6 accent-white"
                type="checkbox"
                id="brown"
                name="brown"
                value="brown"
              />
              <label htmlFor="brown">Brown</label>
            </div>
            <div className="flex items-center gap-5">
              <input
                className="aspect-square h-6 accent-white"
                type="checkbox"
                id="teal"
                name="teal"
                value="teal"
              />
              <label htmlFor="teal">Teal</label>
            </div>
            <div className="flex items-center gap-5">
              <input
                className="aspect-square h-6 accent-white"
                type="checkbox"
                id="white"
                name="white"
                value="white"
              />
              <label htmlFor="white">White</label>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className={`${oswald.className} text-2xl`}>Size</h1>
            <div className="flex items-center gap-5">
              <input
                className="aspect-square h-6 accent-white"
                type="checkbox"
                id="21×30 cm"
                name="21×30 cm"
                value="21×30 cm"
              />
              <label htmlFor="21×30 cm">8 ¼ x 11 ¾ in (21×30 cm)</label>
            </div>
            <div className="flex items-center gap-5">
              <input
                className="aspect-square h-6 accent-white"
                type="checkbox"
                id="30×40 cm"
                name="30×40 cm"
                value="30×40 cm"
              />
              <label htmlFor="30×40 cm">11 ¾ x 15 ¾ in (30×40 cm)</label>
            </div>
            <div className="flex items-center gap-5">
              <input
                className="aspect-square h-6 accent-white"
                type="checkbox"
                id="40×50 cm"
                name="40×50 cm"
                value="40×50 cm"
              />
              <label htmlFor="40×50 cm">15 ¾ x 19 ¾ in (40×50 cm)</label>
            </div>
            <div className="flex items-center gap-5">
              <input
                className="aspect-square h-6 accent-white"
                type="checkbox"
                id="50×70 cm"
                name="50×70 cm"
                value="50×70 cm"
              />
              <label htmlFor="50×70 cm">19 ¾ x 27 ½ in (50×70 cm)</label>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col flex-wrap justify-between gap-8 sm:flex-row sm:gap-5">
          {mappedProducts}
        </div>
      </div>
    </main>
  );
}

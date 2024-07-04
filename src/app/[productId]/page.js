'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { products } from '@/lib/products';
import { Oswald, Roboto } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/legacy/image';
const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

function Product() {
  const productId = parseInt(usePathname().slice(1));
  const productDetails = products.find(
    (product) => product.productId === productId,
  );

  return (
    <div
      className={`${roboto.className} mb-20 mt-14 flex w-full max-w-[1230px] flex-col items-start px-7`}
    >
      <div className="flex w-full flex-col gap-20 text-sm">
        <p className="-mb-12">
          <Link href="/" className="underline underline-offset-2">
            Home
          </Link>{' '}
          / {productDetails.name}
        </p>
        <div className="flex flex-col gap-10 tab:flex-row tab:justify-start tab:gap-0">
          <div className="relative aspect-square w-full tab:mr-7 tab:w-[55%] xl:w-[45%]">
            <Image
              alt={`${productDetails.name} image`}
              src={productDetails.image}
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-7 tab:w-[40%] xl:w-[53%]">
            <h1 className={`${oswald.className} text-2xl tab:text-3xl`}>
              {productDetails.name}
            </h1>
            <div className="flex gap-1 text-lg text-[#3B3B3B] tab:text-xl">
              {productDetails.hasDiscount && (
                <p className="line-through">${productDetails.realPrice}0</p>
              )}
              {productDetails.hasDiscount && (
                <p>${productDetails.discountPrice}0</p>
              )}
              {!productDetails.hasDiscount && (
                <p>${productDetails.realPrice}0</p>
              )}
            </div>
            <p className="text-[15.1px] text-[#3B3B3B] tab:text-lg">
              {productDetails.description}
            </p>
            <div className="flex gap-4">
              <input
                type="number"
                className="h-12 rounded border-[1px] border-black px-6 text-center text-base"
                defaultValue={1}
                min={1}
                max={10}
              />
              <button className="h-12 w-36 rounded bg-black text-center text-base text-white">
                Add To Cart
              </button>
            </div>
            <p>Category: Poster</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

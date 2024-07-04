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
        <div className="tab:flex-row tab:gap-0 tab:justify-evenly flex flex-col gap-10">
          <div className="tab:w-[50vw] relative aspect-square w-full">
            <Image
              alt={`${productDetails.name} image`}
              src={productDetails.image}
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="tab:w-[30vw] flex flex-col gap-7">
            <h1 className={`${oswald.className} text-2xl`}>
              {productDetails.name}
            </h1>
            <div className="flex gap-1 text-lg">
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
            <p className="text-[15.1px]">{productDetails.description}</p>
            <div className="flex gap-10">
              <input
                type="number"
                className="h-14 rounded border-[1px] border-black px-5 text-center text-base"
                defaultValue={1}
                min={1}
                max={10}
              />
              <button className="h-14 w-36 rounded bg-black text-center text-base text-white">
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

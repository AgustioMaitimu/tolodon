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
  const [chosenMenu, setChosenMenu] = useState('Description');
  const productId = parseInt(usePathname().slice(1));
  const productDetails = products.find(
    (product) => product.productId === productId,
  );
  const otherProducts = products.filter(
    (product) => product.productId !== productId,
  );

  const relatedProducts = otherProducts.map((x) => (
    <div
      key={x.productId}
      href={`/${x.productId}`}
      className={`${roboto.className} flex w-full flex-col items-center gap-4 text-sm sm:w-[17%] 2xl:text-base`}
    >
      <Link
        href={`/${x.productId}`}
        className="relative mb-3 aspect-square w-full"
      >
        <Image
          alt={`${x.name} image`}
          src={x.image}
          layout="fill"
          className="object-cover"
        />
      </Link>
      <Link
        href={`/${x.productId}`}
        className={`${oswald.className} cursor-pointer text-base decoration-1 ring-offset-2 hover:underline lg:text-xl`}
      >
        {x.name}
      </Link>
      <div className="flex gap-2 lg:text-lg">
        {x.hasDiscount && <p className="line-through">${x.realPrice}0</p>}
        {x.hasDiscount && <p>${x.discountPrice}0</p>}
        {!x.hasDiscount && <p>${x.realPrice}0</p>}
      </div>
      <button className="mt-1 rounded bg-black px-6 py-3 text-white sm:w-[60%] sm:px-0">
        Add to cart
      </button>
    </div>
  ));

  function handleMenuChange(e) {
    setChosenMenu(e.target.innerHTML);
  }

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
        <div className="flex flex-col gap-1 text-[17px] font-bold text-[#7F7F7F] tab:flex-row tab:gap-4 xl:text-lg">
          <h1
            onClick={handleMenuChange}
            className={`${chosenMenu == 'Description' && 'border-l-2 border-black text-[#3b3b3b] tab:border-b-2 tab:border-l-0'} flex h-10 cursor-pointer items-center px-4 hover:text-[#3b3b3b]`}
          >
            Description
          </h1>
          <h1
            onClick={handleMenuChange}
            className={`${chosenMenu == 'Additional Information' && 'border-l-2 border-black text-[#3b3b3b] tab:border-b-2 tab:border-l-0'} flex h-10 cursor-pointer items-center px-4 hover:text-[#3b3b3b]`}
          >
            Additional Information
          </h1>
          <h1
            onClick={handleMenuChange}
            className={`${chosenMenu == 'Reviews (0)' && 'border-l-2 border-black text-[#3b3b3b] tab:border-b-2 tab:border-l-0'} flex h-10 cursor-pointer items-center px-4 hover:text-[#3b3b3b]`}
          >
            Reviews (0)
          </h1>
        </div>
        <div className="-mt-6 px-3">
          {chosenMenu == 'Description' && <p>{productDetails.description}</p>}
          {chosenMenu == 'Additional Information' && (
            <div className="flex flex-col gap-3">
              {
                <p>
                  <span className="mr-4 font-bold">Color</span>{' '}
                  {productDetails.colors.join(', ')}
                </p>
              }
              <p>
                <span className="mr-6 font-bold">Size</span>{' '}
                {productDetails.size}
              </p>
            </div>
          )}
          {chosenMenu == 'Reviews (0)' && <p>There are no reviews yet.</p>}
        </div>
        <div className="flex w-full flex-col gap-8">
          <h1 className={`${oswald.className} text-3xl`}>Related Products</h1>
          <div className="flex w-full flex-col flex-wrap justify-evenly gap-16 sm:flex-row lg:gap-9">
            {relatedProducts}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

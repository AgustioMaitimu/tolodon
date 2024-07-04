import { Oswald, Roboto } from 'next/font/google';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

function Item({
  name,
  realPrice,
  hasDiscount,
  discountPrice,
  productId,
  description,
  colors,
  size,
  image,
}) {
  return (
    <Link
      href={`/${productId}`}
      className={`${roboto.className} flex w-full flex-col text-sm sm:w-[30%] 2xl:text-base`}
    >
      <div className="relative mb-3 aspect-square w-full">
        <Image
          alt={`${name} image`}
          src={image}
          layout="fill"
          className="object-cover"
        />
      </div>
      <h1 className={`${oswald.className}`}>{name}</h1>
      <div className="flex gap-2">
        {hasDiscount && <p className="line-through">${realPrice}0</p>}
        {hasDiscount && <p>${discountPrice}0</p>}
        {!hasDiscount && <p>${realPrice}0</p>}
      </div>
    </Link>
  );
}

export default Item;

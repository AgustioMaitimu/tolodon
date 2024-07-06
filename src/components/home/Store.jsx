'use client';

import React from 'react';
import Item from '@/components/home/Item';
import { Oswald, Roboto } from 'next/font/google';
import { products } from '@/lib/products';
import { useEffect, useState } from 'react';

const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

function Store() {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [filters, setFilters] = useState({ colors: [], sizes: [] });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [colorCounts, setColorCounts] = useState({
    Black: 0,
    Brown: 0,
    Teal: 0,
    White: 0,
  });
  const [sizeCounts, setSizeCounts] = useState({
    '8 ¼ x 11 ¾ in (21×30 cm)': 0,
    '11 ¾ x 15 ¾ in (30×40 cm)': 0,
    '15 ¾ x 19 ¾ in (40×50 cm)': 0,
    '19 ¾ x 27 ½ in (50×70 cm)': 0,
  });

  useEffect(() => {
    const colorCounter = { Black: 0, Brown: 0, Teal: 0, White: 0 };
    const sizeCounter = {
      '8 ¼ x 11 ¾ in (21×30 cm)': 0,
      '11 ¾ x 15 ¾ in (30×40 cm)': 0,
      '15 ¾ x 19 ¾ in (40×50 cm)': 0,
      '19 ¾ x 27 ½ in (50×70 cm)': 0,
    };

    filteredProducts.forEach((product) => {
      product.colors.forEach((color) => {
        if (colorCounter[color] !== undefined) {
          colorCounter[color]++;
        }
      });
      if (sizeCounter[product.size] !== undefined) {
        sizeCounter[product.size]++;
      }
    });

    const mapped = filteredProducts.map((x, index) => {
      return (
        <Item
          name={x.name}
          productId={x.productId}
          realPrice={x.realPrice}
          hasDiscount={x.hasDiscount}
          discountPrice={x.discountPrice}
          description={x.description}
          colors={x.colors}
          size={x.size}
          image={x.image}
          key={index}
        />
      );
    });

    setDisplayedProducts(mapped);
    setColorCounts(colorCounter);
    setSizeCounts(sizeCounter);
  }, [filteredProducts]);

  useEffect(() => {
    if (
      Object.keys(filters.colors).length == 0 &&
      Object.keys(filters.sizes).length == 0
    ) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => {
        const colorMatch = filters.colors.every((color) =>
          product.colors.includes(color),
        );
        const sizeMatch = filters.sizes.every((size) =>
          product.size.includes(size),
        );
        return colorMatch && sizeMatch;
      });
      setFilteredProducts(filtered);
    }
  }, [filters]);

  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;
    setFilters((prev) => ({
      ...prev,
      [filterType]: event.target.checked
        ? [...prev[filterType], value]
        : prev[filterType].filter((v) => v !== value),
    }));
  };

  return (
    <div
      className={`${roboto.className} mt-14 flex w-full flex-col justify-between gap-14 pb-28 md:flex-row`}
    >
      <div className="flex flex-col gap-10 text-sm sm:px-[5vw] md:px-0 lg:w-80">
        <div className="flex flex-col gap-6">
          <h1
            className={`${oswald.className} text-2xl`}
            onClick={() => console.log(filters)}
          >
            Color
          </h1>
          {['Black', 'Brown', 'Teal', 'White'].map((color, index) => (
            <div key={index} className="flex items-center gap-5">
              <input
                className="aspect-square h-6 accent-black"
                type="checkbox"
                id={color}
                name={color}
                value={color}
                onChange={(e) => handleFilterChange(e, 'colors')}
              />
              <label htmlFor={color}>
                {color} <span className="ml-[2px]">({colorCounts[color]})</span>
              </label>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <h1 className={`${oswald.className} text-2xl`}>Size</h1>
          {[
            '8 ¼ x 11 ¾ in (21×30 cm)',
            '11 ¾ x 15 ¾ in (30×40 cm)',
            '15 ¾ x 19 ¾ in (40×50 cm)',
            '19 ¾ x 27 ½ in (50×70 cm)',
          ].map((size, index) => (
            <div key={index} className="flex items-center gap-5">
              <input
                className="aspect-square h-6 accent-black"
                type="checkbox"
                id={size}
                name={size}
                value={size}
                onChange={(e) => handleFilterChange(e, 'sizes')}
              />
              <label htmlFor={size}>
                {size} <span className="ml-[2px]">({sizeCounts[size]})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col flex-wrap justify-start gap-1 sm:flex-row lg:gap-9">
        {displayedProducts}
      </div>
    </div>
  );
}

export default Store;

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

    setColorCounts(colorCounter);
    setSizeCounts(sizeCounter);
  }, [filteredProducts]);

  useEffect(() => {
    const mapped = filteredProducts.map((x, index) => {
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
        />
      );
    });
    setDisplayedProducts(mapped);
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

  function handleColorChange(event) {
    const color = event.target.value;
    if (event.target.checked) {
      setFilters((prev) => ({
        ...prev,
        colors: [...prev.colors, color],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        colors: prev.colors.filter((c) => c !== color),
      }));
    }
  }

  function handleSizeChange(event) {
    const size = event.target.value;
    if (event.target.checked) {
      setFilters((prev) => ({
        ...prev,
        sizes: [...prev.sizes, size],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        sizes: prev.sizes.filter((s) => s !== size),
      }));
    }
  }

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
          <div className="flex items-center gap-5">
            <input
              className="aspect-square h-6 accent-black"
              type="checkbox"
              id="Black"
              name="Black"
              value="Black"
              onChange={handleColorChange}
            />
            <label htmlFor="Black">
              Black <span className="ml-[2px]">({colorCounts.Black})</span>
            </label>
          </div>
          <div className="flex items-center gap-5">
            <input
              className="aspect-square h-6 accent-black"
              type="checkbox"
              id="Brown"
              name="Brown"
              value="Brown"
              onChange={handleColorChange}
            />
            <label htmlFor="Brown">
              Brown <span className="ml-[2px]">({colorCounts.Brown})</span>
            </label>
          </div>
          <div className="flex items-center gap-5">
            <input
              className="aspect-square h-6 accent-black"
              type="checkbox"
              id="Teal"
              name="Teal"
              value="Teal"
              onChange={handleColorChange}
            />
            <label htmlFor="Teal">
              Teal <span className="ml-[2px]">({colorCounts.Teal})</span>
            </label>
          </div>
          <div className="flex items-center gap-5">
            <input
              className="aspect-square h-6 accent-black"
              type="checkbox"
              id="White"
              name="White"
              value="White"
              onChange={handleColorChange}
            />
            <label htmlFor="White">
              White <span className="ml-[2px]">({colorCounts.White})</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className={`${oswald.className} text-2xl`}>Size</h1>
          <div className="flex items-center gap-5">
            <input
              className="aspect-square h-6 accent-black"
              type="checkbox"
              id="8 ¼ x 11 ¾ in (21×30 cm)"
              name="8 ¼ x 11 ¾ in (21×30 cm)"
              value="8 ¼ x 11 ¾ in (21×30 cm)"
              onChange={handleSizeChange}
            />
            <label htmlFor="8 ¼ x 11 ¾ in (21×30 cm)">
              8 ¼ x 11 ¾ in (21×30 cm){' '}
              <span className="ml-[3px]">
                ({sizeCounts['8 ¼ x 11 ¾ in (21×30 cm)']})
              </span>
            </label>
          </div>
          <div className="flex items-center gap-5">
            <input
              className="aspect-square h-6 accent-black"
              type="checkbox"
              id="11 ¾ x 15 ¾ in (30×40 cm)"
              name="11 ¾ x 15 ¾ in (30×40 cm)"
              value="11 ¾ x 15 ¾ in (30×40 cm)"
              onChange={handleSizeChange}
            />
            <label htmlFor="11 ¾ x 15 ¾ in (30×40 cm)">
              11 ¾ x 15 ¾ in (30×40 cm)
              <span className="ml-[6px]">
                ({sizeCounts['11 ¾ x 15 ¾ in (30×40 cm)']})
              </span>
            </label>
          </div>
          <div className="flex items-center gap-5">
            <input
              className="aspect-square h-6 accent-black"
              type="checkbox"
              id="15 ¾ x 19 ¾ in (40×50 cm)"
              name="15 ¾ x 19 ¾ in (40×50 cm)"
              value="15 ¾ x 19 ¾ in (40×50 cm)"
              onChange={handleSizeChange}
            />
            <label htmlFor="15 ¾ x 19 ¾ in (40×50 cm)">
              15 ¾ x 19 ¾ in (40×50 cm)
              <span className="ml-[6px]">
                ({sizeCounts['15 ¾ x 19 ¾ in (40×50 cm)']})
              </span>
            </label>
          </div>
          <div className="flex items-center gap-5">
            <input
              className="aspect-square h-6 accent-black"
              type="checkbox"
              id="19 ¾ x 27 ½ in (50×70 cm)"
              name="19 ¾ x 27 ½ in (50×70 cm)"
              value="19 ¾ x 27 ½ in (50×70 cm)"
              onChange={handleSizeChange}
            />
            <label htmlFor="19 ¾ x 27 ½ in (50×70 cm)">
              19 ¾ x 27 ½ in (50×70 cm)
              <span className="ml-[6px]">
                ({sizeCounts['19 ¾ x 27 ½ in (50×70 cm)']})
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col flex-wrap justify-start gap-8 sm:flex-row lg:gap-9">
        {displayedProducts}
      </div>
    </div>
  );
}

export default Store;

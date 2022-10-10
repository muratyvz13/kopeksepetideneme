/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
let ss="/product/";
export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="rounded-3xl shadow-2xl bg-gradient-to-b from-[#e1e1e2] to-[#c79295] currentcard my-2 md:my-4">
      <Link href={"/category/"+`${product.deneme}`}>
        <a>
        <h1>{product.description}</h1>
          <img
            src={product.image}
            alt={product.category}
            className=" rounded-full w-16 h-16 md:w-32 md:h-32 mx-auto"
          />
        </a>
      </Link>
      <h2 className=' text-center text-white text-base font-bold mt-5 px-3'>Sevimli dişi maltese terrier yavrularımız</h2>
    <h2 className=' text-center text-white text-base font-mono px-3'>Sevimli dişi maltese terrier yavrularımız</h2>
    </div>
  );
}

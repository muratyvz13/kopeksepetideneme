/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="rounded-3xl shadow-2xl bg-gradient-to-b from-[#e1e1e2] to-[#c79295] h-72 w-64 my-4">
      <Link href={`/product/${product.slug}`}>
        <a>
        <h1>{product.description}sdds</h1>
          <img
            src={'/images/sample.jpeg'}
            alt={product.name}
            className=" rounded-full w-32 h-32 mx-auto my-5"
          />
        </a>
      </Link>
    <h2 className=' text-center text-white text-base font-mono'>Sevimli dişi maltese terrier yavrularımız</h2>
    </div>
  );
}

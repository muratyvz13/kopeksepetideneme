/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem2({ product, addToCartHandler }) {
  return (
    <div className="card relative">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={'/images/cardbgblack.png'}
            alt={product.name}
            className="rounded shadow object-cover h-64 w-full"
          />
        </a>
      </Link>
      
          <img
            src={'/images/sample.jpeg'}
            alt={product.name}
            className="absolute ml-auto mr-auto left-0 right-0 mt-auto mb-auto top-0 bottom-30 w-32 rounded-full"
          />
    
    </div>
  );
}

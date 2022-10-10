/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function Categories({ product, addToCartHandler }) {
  return (
    <div className="h-72 w-full my-4">
        <div className='flex'>
            <img src='/images/caticon.png'></img>

        </div>
       
    </div>
  );
}

import axios from 'axios';
import { useContext,useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Product from '../models/Product';
import {XCircleIcon} from '@heroicons/react/outline'
import db from '../utils/db';
import { Store } from '../utils/Store';
import { interpolateAs } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [dogcount, setdogcount] = useState(0);
  const [catcount, setcatcount] = useState(0);
  const [birdcount, setbirdcount] = useState(0);
  let objectempty = { };
  const [kategorilerkopek, setKategorilerkopek] =useState(objectempty);
  const [kategorilerkedi, setKategorilerkedi] =useState(objectempty);
  const [kategorilerkus, setKategorilerkus] =useState(objectempty);
  useEffect(() => {
    const kopekler=products.filter(person =>  person.category == 'kopek');
    setdogcount(kopekler.length);
    const kediler=products.filter(person =>  person.category == 'kedi');
    setcatcount(kediler.length);
    const kuslar=products.filter(person =>  person.category == 'kuş');
    setcatcount(kuslar.length);
    const kopeklist = [""];
    const kedilist = [""];
    const kuslist = [""];
    products.filter(person2 =>person2.category == 'kopek').map((product) => (
      kopeklist.push(product.detailcategory)
    ));
    products.filter(person2 =>person2.category == 'kedi').map((product) => (
      kedilist.push(product.detailcategory)
    ));
    products.filter(person2 =>person2.category == 'kuş').map((product) => (
      kuslist.push(product.detailcategory)
    ));
  let resultdog = { };
for(var i = 0; i < kopeklist.length; ++i) {
    if(!resultdog[kopeklist[i]])
        resultdog[kopeklist[i]] = 0;
    ++resultdog[kopeklist[i]];
}
setKategorilerkopek(resultdog);
let resultcat = { };
for(var i = 0; i < kopeklist.length; ++i) {
    if(!resultcat[kedilist[i]])
        resultcat[kedilist[i]] = 0;
    ++resultcat[kedilist[i]];
}
setKategorilerkedi(resultcat);
let resultbird = { };
for(var i = 0; i < kuslist.length; ++i) {
    if(!resultbird[kuslist[i]])
        resultbird[kuslist[i]] = 0;
    ++resultbird[kuslist[i]];
}
setKategorilerkus(resultbird);



  }, [dogcount,catcount]);


  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    
    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };
  
  return (
    <Layout title="Home Page">
      <div className=' mb-24'>
      <div className='mr-20 ml-20 my-10'>
          <img src='/images/bannerevcilevi.png'></img>
      </div>
      
        <div className='flex'>
        <div className='hidden sm:block ml-20 w-[370px] h-[1000px] bg-white rounded-3xl'>
          <div className=' ml-10 border-b-4 pb-10'>
        
          <img className='inline-block w-9 h-9 mr-2 mb-2' src='/images/dogeicon.png'></img><h2 className=' mt-8 font-extralight text-2xl inline-block'>Köpek İlanları</h2> <h5 className="text-xs text-[#898989] inline-block italic">({dogcount})  </h5>
            <ul className=''>
            {
            Object.entries(kategorilerkopek).map((key1, value) => (
              key1.slice(0, -1)!="undefined"  && key1.slice(0, -1)!=""  &&
              <div key={value} className='ml-4'>
              <Link key={value} href={"/"+key1.slice(0, -1)}>
              <li key={value} className='cursor-pointer ml-8 mt-0 font-extralight inline-block text-lg'>{key1.slice(0, -1)}</li>
              </Link>
              <h5 key="{value}" className="text-xs text-[#898989] inline-block italic">({key1.slice(-1)})</h5>
            
          </div> 
           ))}
           </ul>   
          </div> 
          <div className=' ml-10 border-b-4 pb-10'>
            
          <img className='inline-block w-9 h-9 mr-2 mb-2' src='/images/caticon.png'></img><h2 className=' mt-8 font-extralight text-2xl inline-block'>Kedi İlanları</h2> <h5 className="text-xs text-[#898989] inline-block italic">({catcount})  </h5>
            <ul className=''>
                {
                Object.entries(kategorilerkedi).map((key1, value) => (
                  key1.slice(0, -1)!="undefined"  && key1.slice(0, -1)!=""  &&
                <div key={value} className='ml-4'>
                <Link key={value} href={"/"+key1.slice(0, -1)}>
                <li key={value} className='cursor-pointer ml-8 mt-0 font-extralight inline-block text-lg'>{key1.slice(0, -1)}</li>
                </Link>
                <h5 key="{value}" className="text-xs text-[#898989] inline-block italic">({key1.slice(-1)})</h5>
            
                  </div> 
                
                ))}
            </ul>   
          </div> 
          <div className=' ml-10'>
          
          <img className='inline-block w-9 h-9 mr-2 mb-2' src='/images/caticon.png'></img><h2 className=' mt-8 font-extralight text-2xl inline-block'>Kuş İlanlar</h2> <h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
            <ul className=''>
            {
                Object.entries(kategorilerkus).map((key1, value) => (
                  key1.slice(0, -1)!="undefined"  && key1.slice(0, -1)!=""  &&
                <div key={value} className='ml-4'>
                  <Link key={value} href={"/"+key1.slice(0, -1)}>
                <li key={value} className='cursor-pointer ml-8 mt-0 font-extralight inline-block text-lg'>{key1.slice(0, -1)}</li>
                </Link>
                <h5 key="{value}" className="text-xs text-[#898989] inline-block italic">({key1.slice(-1)})</h5>
            
                  </div> 
                
                ))}

            </ul>   
          </div> 
        </div>
        
        <div className="m-auto mt-4 ml-16">
        <h1 className='ml-4 text-2xl font-bold border inline-block'>Köpek Vitrini</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 border-t-8">
      
        {products.filter(person =>  person.category == 'kopek').map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
          
        ))}
      </div>
      <h1 className='ml-4 text-2xl font-bold border inline-block'>Kedi Vitrini</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 border-t-8">
        {products.filter(person => person.vitrin == 'true' && person.category == 'kopek').map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
      <h1 className='ml-4 text-2xl font-bold border inline-block'>Popüler İlanlar</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 border-t-8">
        {products.filter(person =>  person.category == 'kopek').map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
        </div>
      
        </div>
      
        </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();

  
  return {
    props: {
      products: products.map(db.convertDocToObj),
      
    },
  };
}

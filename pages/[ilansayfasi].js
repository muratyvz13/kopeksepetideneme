import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Product from '../models/Product';

import db from '../utils/db';
import { Store } from '../utils/Store';

export default function Home({ products,params }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { params2 } = params;
  

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
      <div className=' mb-24 mt-12'>
      
      
        <div className='flex'>
        <div className='hidden sm:block ml-20 w-[370px] h-[1000px] bg-white rounded-3xl'>
          <div className=' ml-10 border-b-4 pb-10'>
         

          <img className='inline-block w-9 h-9 mr-2 mb-2' src='/images/dogeicon.png'></img><h2 className=' mt-8 font-extralight text-2xl inline-block'>Köpek İlanları</h2> <h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
            <ul className=''>
              <li className='ml-8 mt-3 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
              <br></br>
              <li className='ml-8 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
              <br></br>
              <li className='ml-8 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
              <br></br>
              <li className='ml-8 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
            </ul>   
          </div> 
          <div className=' ml-10 border-b-4 pb-10'>
           
          <img className='inline-block w-9 h-9 mr-2 mb-2' src='/images/caticon.png'></img><h2 className=' mt-8 font-extralight text-2xl inline-block'>Kedi İlanları</h2> <h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
            <ul className=''>
              <li className='ml-8 mt-3 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
              <br></br>
              <li className='ml-8 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
              <br></br>
              <li className='ml-8 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
              <br></br>
              <li className='ml-8 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
            </ul>   
          </div> 
          <div className=' ml-10'>
          
          <img className='inline-block w-9 h-9 mr-2 mb-2' src='/images/caticon.png'></img><h2 className=' mt-8 font-extralight text-2xl inline-block'>Popüler İlanlar</h2> <h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
            <ul className=''>
              <li className='ml-8 mt-3 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
              <br></br>
              <li className='ml-8 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
              <br></br>
              <li className='ml-8 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
              <br></br>
              <li className='ml-8 font-extralight inline-block text-lg'>Akita İnu</li><h5 className="text-xs text-[#898989] inline-block italic">(2222)  </h5>
            </ul>   
          </div> 
        </div>
        <div className="m-auto mt-4 ml-16">
        <h1 className='ml-4 text-2xl font-bold border inline-block'></h1>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 border-t-8">
        {products.filter(person =>  person.category.search("kop")!=-1 || person.description.search("At")!=-1 ).map((product) => (
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


export async function getServerSideProps(context) {
  const { params } = context;
  await db.connect();
  const products = await Product.find().lean();

  return {
    props: {
      products: products.map(db.convertDocToObj),
      params,     
    },
  };
}

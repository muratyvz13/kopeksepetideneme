import { Tab } from '@headlessui/react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext,useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import Tabs from '../../components/tabs';
import Product from '../../models/Product';
import db from '../../utils/db';
import { Store } from '../../utils/Store';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>;
  }
  const [Tabnumber, setTabnumber] = useState(1);
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
  
  return (
    <Layout title={product.description}>

      <div className="py-2">
        <Link href="/">s</Link>
      </div>
      <div>

      </div>
      <h1 className='mt-8 text-2xl ml-28 mr-56 py-2 text-left font-bold border-b-4 border-[#d0d0d0]'>{product.description}</h1>
         
      <div className="flex gap-20 pl-[100px] pt-[30px] mb-10 ">
        
        <div className='ml-8 '>
        <Carousel className='imageboyut'>
                  <div>
                      <img src="/images/sample.jpeg" alt="image1" className='imageboyut2' />
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="/images/caticon.png" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="/images/sample.jpeg" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/images/sample.jpeg" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/images/sample.jpeg" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
        </div>
        
        <div className='h-[500px] w-[400px] px-3 py-2'>
          <h1 className=' text-xl py-2 text-right font-bold border-b-4 border-[#d0d0d0]'>{product.location}</h1>
          <div className='flex border-b-4 my-4 py-4 border-[#d0d0d0] kosele' >
            <div>
              <h1 className=' text-xl font-bold text-left '>İlan No:</h1>
            </div>
            <div>
              <h1 className=' text-xl font-thin text-right '>{product._id}</h1>
            </div>
          </div>
          <div className='flex border-b-4 my-4 py-4 border-[#d0d0d0] kosele'>
            <div>
              <h1 className=' text-xl font-bold text-left '>Fiyat:</h1>
            </div>
            <div>
              <h1 className=' text-xl font-thin text-right '>{product.fiyat}</h1>
            </div>
          </div>
          <div className='flex border-b-4 my-4 py-4 border-[#d0d0d0] kosele'>
            <div>
              <h1 className=' text-xl font-bold text-left '>Irk:</h1>
            </div>
            <div>
              <h1 className=' text-xl font-thin text-right '>{product.irk}</h1>
            </div>
          </div>
          <div className='flex border-b-4 my-4 py-4 border-[#d0d0d0] kosele'>
            <div>
              <h1 className=' text-xl font-bold text-left '>Cinsiyet:</h1>
            </div>
            <div>
              <h1 className=' text-xl font-thin text-right'>{product.cinsiyet}</h1>
            </div>
          </div>
          <div className='flex border-b-4 my-4 py-4  border-[#d0d0d0] kosele'>
            <div>
              <h1 className=' text-xl font-bold text-left border-[#d0d0d0]'>Yaş:</h1>
            </div>
            <div>
              <h1 className=' text-xl font-thin text-right border-[#d0d0d0]'>{product.age}</h1>
            </div>
          </div>
        </div>
        <div className=' w-[750px] rounded-t-3xl'>
        
          <div className='grid bg-[#d1cfcf] rounded-3xl w-[300px]'>
          <img className='mr-auto ml-auto mt-2 w-[130px] h-[130px]' src='/images/caticon.png'></img>
          <h1 className='mr-auto ml-auto font-extrabold text-2xl text-[#292929]'>{product.ownerUser}</h1>
          <h1 className='mr-auto ml-auto font-thin text-2xl text-[#292929]'>Dükkan İsmi</h1>
           
          <button class="mt-6 bg-[#c99da2] w-3/4 mx-auto mb-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
          <div className=' mr-24'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 inline-block pb-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <h1 className='inline-block text-xl ml-2'>Ara</h1>
          </div>
          </button>
          <button class="mt-6 bg-[#c99da2] w-3/4 mx-auto mb-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
          <div className=' '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 inline-block pb-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          <h1 className='inline-block text-xl ml-2'>Mesaj Gonder </h1>
          </div>
          </button>
          <button class="mt-6 bg-[#c99da2] w-3/4 mx-auto mb-2 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-3xl">
          <div className=' '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 inline-block pb-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
          </svg>
          <h1 className='inline-block text-lg'>Mağazayı Görüntüle </h1>
          </div>
          </button>
          
          
          </div>
          

        </div>
      </div>
      <div className='w-[350px] md:w-[1300px] ml-[30px] lg:ml-[100px] mb-20'>
      <ul class="text-2xl gap font-extrabold text-center text-gray-500 divide-x grid sm:flex ">
    <li class="w-full">
        <a href="#" className={
                  (Tabnumber == 1
                    ? "inline-block p-4 w-[300px] text-gray-900 bg-gray-100 rounded-t-2xl focus:ring-4 active focus:outline-none dark:bg-[#333333] dark:text-white"
                    : "inline-block p-4 w-[300px] bg-white text-white hover:text-gray-700 rounded-t-2xl hover:bg-gray-50 focus:ring-4 focus:outline-none dark:hover:text-white dark:bg-[#808080] dark:hover:bg-gray-700")}
                  onClick={e => {
                  e.preventDefault();
                  setTabnumber(1);
                 
                }} aria-current="page">Açıklama</a>
    </li>
    <li class="w-full">
        <a href="#" className={
                  (Tabnumber == 2
                    ? "inline-block p-4 w-[300px] text-gray-900 bg-gray-100 rounded-t-2xl focus:ring-4 active focus:outline-none dark:bg-[#333333] dark:text-white"
                    : "inline-block p-4 w-[300px] bg-white text-white hover:text-gray-700 rounded-t-2xl hover:bg-gray-50 focus:ring-4 focus:outline-none dark:hover:text-white dark:bg-[#808080] dark:hover:bg-gray-700")} aria-current="page" onClick={e => {
                  e.preventDefault();
                  setTabnumber(2);
                 
                }} >Konum</a>
    </li>
    <li class="w-full">
        <a href="#" className={
                  (Tabnumber == 3
                    ? "inline-block p-4 w-[300px] text-gray-900 bg-gray-100 rounded-t-2xl focus:ring-4 active focus:outline-none dark:bg-[#333333] dark:text-white"
                    : "inline-block p-4 w-[300px] bg-white text-white hover:text-gray-700 rounded-t-2xl hover:bg-gray-50 focus:ring-4 focus:outline-none dark:hover:text-white dark:bg-[#808080] dark:hover:bg-gray-700")} onClick={e => {
                  e.preventDefault();
                  setTabnumber(3);
               
                }}>Dikkat</a>
    </li>
    
</ul>

      <div className={
                  (Tabnumber == 1
                    ? "w-full h-full p-6 border-[6px] rounded-2xl border-[#cccccc]"
                    : "hidden")}>
         <h1 className=' text-lg'>{product.description}</h1></div>
      <div className={
                  (Tabnumber == 2
                    ? "w-full h-full p-6 border-[6px] rounded-2xl border-[#cccccc]"
                    : "hidden")}>

      </div>
      <div className={
                  (Tabnumber == 3
                    ? "w-full h-full p-6 border-[6px] rounded-2xl border-[#cccccc]"
                    : "hidden")}>
         <h1>Dolandırılmamak için okuyunuz
Evcil hayvan almadan önce WhatsApp üzerinden görüntülü arayarak alacağınız hayvanı canlı görünüz.
Tanımadığınız ve aynı şehirde olmadığınız kişilere kesinlikle para göndermeyin.
Sahiplendirme adı altında sizden kargo ve sigorta parası isteyenlere para göndermeyiniz.
Kesinlikle cebe havale yapmayınız ciddi olarak gördüğünüz satıcıdan mutlaka İban ve hesap numarası isteyiniz.
İlgilendiğiniz evcil hayvanı ilan veren kişinin ilan tarihine dikkat edin.
Whatsapp yer bildirimi ve sabit numara isteyin.
Varsa işyeri veya mağaza resimleri isteyin.
İlgilendiğiniz yavru resimlerdeki yavru mu diye sorun ve videosunu isteyin.
Fazla uzakta değilse evcil hayvanı elden teslim alma talebinde bulunun.
Herhangi bir ödeme yapıp ilgilendiğiniz evcil hayvanı alamamanız halinde evcilevi.com ‘un hiçbir sorumluluğu yoktur.</h1>

      </div>
      </div>
    
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { deneme } = params;

  await db.connect();
  console.log(deneme+"--");  
  const product = await Product.findOne({ deneme }).lean();
  
  await db.disconnect();
  
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}

import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState,useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from '../utils/Store';
import DropdownLink from './DropdownLink';
import { useRouter } from 'next/router';
import Searchbutton from '../components/Searchbutton'


export default function Layout({ title, children }) {
  
  const { status, data: session } = useSession();
  const [Searchbox, setSearchbox] = useState(0);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [seachObject,setseachObject]=useState("");
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  
  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };
  const router = useRouter();
  const ref = useRef(null);
  const calendarBodyRef = React.createRef();
  const { redirect } = router.query;
  
  return (
    <>
      <Head>
   
        <div className=''>
        <title>{title ? title + ' - Evcilevi' : 'Evcilevi'}</title>
        <meta name="description" content="Evcil hayvan platformu" />
        <link rel="icon" href="/favicon.ico" />
        </div>
      </Head>
      
      
      <ToastContainer position="bottom-center" limit={1} />
      {Searchbox == 1 && 
      <div className="w-full absolute block md:hidden">
            <div className="input-group relative flex items-stretch w-full ">
            <button className="btn inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-l-xl shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
            </button>
            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal rounded-l-2xl text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Aramak için buraya yazın" aria-label="Search" aria-describedby="button-addon2"></input>
            <button className="btn inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-r-xl shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
            </button>
            </div>
      </div>
      }
      <div className="flex min-h-screen flex-col bg-[#e0e0e0]">
        <header>
          <nav className="flex h-14 md:h-20 items-center px-4 justify-between shadow-md rounded-b-3xl bg-[#898989]">
            <div className='flex items-center gap-36'>
            <div>
            <Link href="/" >
              <div className="ml-20">
              <img className='logo-settings' src='/images/logo.png'></img>
              </div>
            </Link>
            </div>
            

            <button className="btn ml-36 block md:hidden px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-l-xl shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon2">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
            </button>


            <div className="w-96 hidden md:block ml-20">
            <div className="input-group relative flex items-stretch w-full">
            <Searchbutton />
            </div>
            </div>
            </div>  
            <div>

            
            
             
            <div className='hidden mr-24 md:flex'>
            <button className="bg-[#c3747b] hover:bg-rose-400 text-black font-bold py-1 px-5 rounded-full mr-24 flex items-center">
              <div className='mb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6 inline-block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            </div>
            <div>
            <h1 className='ml-2 inline-block font-bold text-2xl'>Ücretsiz İlan Ver </h1>
            </div>
            </button>

              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? ( 
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className=" text-white">
                    <h1 className='items-center my-3 text-2xl'>{session.user.name}</h1>
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
               <div className='flex'>
                <Link href={'/login'}>
                  <div className='my-3'>
                    <h1 className='text-2xl font-thin hover:text-white'>Giriş Yap</h1>
                  </div>
              </Link>
                <div className='my-2'>
                  <h1 className='text-4xl font-thin'>|</h1>
                </div>
                <div className='my-3'>
                <Link href={'/register'}>
                  <h1 className='text-2xl font-thin hover:text-white'>Üye Ol</h1>
                </Link>
                </div>
                </div>
              )}
             
            </div>
            </div>
          </nav>
        </header>
        
        <main className="">{children}</main>
        
        <footer className="flex justify-around  h-64 rounded-t-3xl shadow-2xl shadow-black">
          <div className='w-72 mt-4'>
          
          <h1 className='mb-3 text-center font-bold text-2xl'>Kurumsal</h1> 
          
          <Link href="/" >
            <a>
            <h4 className='text-center text-2xl text-black hover:text-white'>Hakkımızda</h4>
            </a>
          </Link>
          <Link href="/" >
            <a>
            <h4 className='text-center text-2xl text-black hover:text-white'>Blog</h4>
            </a>
          </Link>
          <Link href="/" >
            <a>
            <h4 className='text-center text-2xl text-black hover:text-white'>SSS</h4>
            </a>
          </Link>
          <Link href="/" >
            <a>
            <h4 className='text-center text-2xl text-black hover:text-white'>İletişim</h4>
            </a>
          </Link>
          <Link href="/" >
            <a>
            <h4 className='text-center text-2xl text-black hover:text-white'>Haberler</h4>
            </a>
          </Link>
          </div>
          <div className='w-72 mt-4'>
          <h1 className='mb-3 text-center font-bold text-2xl'>Hizmetlerimiz</h1> 
          </div>
          <div className='w-72 mt-4'>
          <h1 className='mb-3 text-center font-bold text-2xl'>Petshoplar</h1> 
          </div>
          <div className='w-72 mt-4'>
          <h1 className='mb-3 text-center font-bold text-2xl'>Gizlilik ve Kurumsal</h1> 
          </div>
        </footer>
        <div className='sticky-div w-full h-20 bg-[#363636] rounded-t-3xl justify-around'>
          
          <div className='w-28 h-full ml-10'>
              <div className='w-[50px] h-[50px] bg-black'>
              </div>
              <h6 className='font-normal text-base text-[#c3a6aa]'>Vitrin</h6>
          </div>
          <div className='w-28 h-full'>
              <div className='w-[50px] h-[50px] bg-black'>
              </div>
              <h6 className='font-normal text-base text-[#c3a6aa]'>Kategoriler</h6>

          </div>
          <div className='w-28 h-full relative'>
              <div className='w-[50px] h-[50px] bg-black absolute bottom-10'>

              </div>
              <h6 className='font-normal text-base text-[#c3a6aa] absolute top-10'>İlan Ver</h6>

          </div>
          <div className='w-28 h-full '>
              <div className='w-[50px] h-[50px] bg-black'>
              </div>
              <h6 className='font-normal text-base text-[#c3a6aa]'>Petshoplar</h6>
          </div>
          <div className='w-28 h-full '>
              <div className='w-[50px] h-[50px] bg-black'>
              </div>
              <h6 className='font-normal text-base text-[#c3a6aa]'>Ben</h6>
          </div>
          </div>
        
      </div>
    </>
  );
}

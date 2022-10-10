import Link from 'next/link';
import React, { useEffect,useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
export default function ilanver() {
  const { data: session } = useSession();
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { redirect } = router.query;


  
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password ,phoneNumber ,province,district}) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
        phoneNumber,
        province,
        district,
      });

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Create Account">
      <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 bg-gradient-to-b from-[#898989] to-[#c79295]">
        <header class="max-w-lg mx-auto">
         <a href="#">
            <h1 class="text-4xl font-bold text-white text-center">Giriş</h1>
         </a>
        </header>
        
    <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 class="font-bold text-2xl">Evcil Evine hoşgeldiniz.</h3>
            <p class="text-gray-600 pt-2">Hesabınıza giriş yapınız.</p>
        </section>

        <section class="mt-10">
            <form class="flex flex-col" onSubmit={handleSubmit(submitHandler)}>
            <label htmlFor="name">İsim</label>
            <input
            type="text"
            className="w-full"
            id="name"
            autoFocus
            {...register('name', {
              required: 'Lütfen isim giriniz.',
            })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}          
          
            <label htmlFor="email">Email</label>
            <input
            type="email"
            {...register('email', {
              required: 'Lütfen email giriniz.',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          
          <label htmlFor="password">Şifre </label>
          <input
            type="password"
            {...register('password', {
              required: 'Lütfen şifre giriniz.',
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
             {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
            <label htmlFor="confirmPassword">Şifre Tekrarı</label>
          <input
            className="w-full"
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Lütfen şifrenizi tekrar giriniz.',
              validate: (value) => value === getValues('password'),
              minLength: {
                value: 6,
                message: 'confirm password is more than 5 chars',
              },
            })}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <div className="text-red-500 ">Password do not match</div>
            )}

            <label htmlFor="phoneNumber">Telefon Numarası</label>
            <input
            type="text"
            className="w-full"
            id="phoneNumber"
            autoFocus
            {...register('phoneNumber', {
              required: 'Lütfen telefon numarası giriniz.',
            })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.phoneNumber.message}</div>
          )}

<label htmlFor="province">İl</label>
            <input
            type="text"
            className="w-full"
            id="province"
            autoFocus
            {...register('province', {
              required: 'Lütfen il giriniz.',
            })}
          />
          {errors.province && (
            <div className="text-red-500">{errors.province.message}</div>
          )} 

<label htmlFor="district">İlçe</label>
            <input
            type="text"
            className="w-full"
            id="district"
            autoFocus
            {...register('district', {
              required: 'Lütfen ilçe giriniz.',
            })}
          />
          {errors.district && (
            <div className="text-red-500">{errors.district.message}</div>
          )} 

 
                <div class="flex justify-end">
                    <a href="#" class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Şifremi unuttum?</a>
                </div>
                <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Giriş Yap</button>
            </form>
        </section>
    </main>

    <div class="max-w-lg mx-auto text-center mt-12 mb-6">
        <p class="text-white">Don't have an account? <a href="#" class="font-bold hover:underline">Sign up</a>.</p>
    </div>

   
</div>
     
    </Layout>
  );
 
}

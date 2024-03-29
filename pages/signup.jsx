import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserAuth } from '@/context/AuthContext';
import Head from 'next/head';
import { useRouter } from 'next/navigation'

function signup(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user,SignUp} = UserAuth()
    const router = useRouter()

    const handleSubmit = async (e) =>{
          e.preventDefault()
          try {
             await SignUp(email, password)
             router.push('/')
          } catch (error) {
             console.log(error);
          }
    }

    return (
        <>
          <Head>
            <title>Sign Up</title>
          </Head>
          <div className='w-full h-screen'>
              <Image className='hidden sm:block w-full h-full object-cover' src='/netflix-code.png' alt='/' layout='fill'/>
              <div className='fixed top-0 left-0 bg-black/60'></div>
              <div className='fixed w-full px-4 py-24 z-50'> 
                   <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-lg'>
                         <div className='max-w-[320px] mx-auto py-16'>
                              <h1 className='text-3xl font-bold'>Sign UP</h1>
                              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                  <input 
                                  onChange={(e)=>setEmail(e.target.value)}
                                  className='p-3 my-2 bg-gray-700 rounded' 
                                  type='email' 
                                  placeholder='Email' 
                                  autoComplete='email'/>
                                  <input 
                                      onChange={(e)=>setPassword(e.target.value)}
                                      className='p-3 my-2 bg-gray-700 rounded' 
                                      type='password' 
                                      placeholder='password' 
                                      autoComplete='current-password'
                                    />
                                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                                    <div className='flex justify-between items-center text-sm text-gray-600'>
                                        <p><input className='mr-2' type='checkbox'/>Remember me</p>
                                        <p>Need Hlep ?</p>
                                    </div>
                                    <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix ?</span><Link className='ml-1 hover:underline' href={'/login'}>Sign In</Link></p>
                              </form>
                         </div>
                   </div>
              </div>
          </div>  
        </>
    );
}

export default signup;
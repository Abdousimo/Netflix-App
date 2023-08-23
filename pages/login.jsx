import React,{useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { UserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation'

function login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {user,LogIn} = UserAuth()
    const router = useRouter()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
           await LogIn(email, password)
           //router.push('/')
        } catch (error) {
           console.log(error);
           setError(error)
        }
  }

    return (
            <>
              <Head>
                <title>LogIn</title>
              </Head>
              <div className='w-full h-screen'>
              <Image className='hidden sm:block w-full h-full object-cover' src='/netflix-code.png' alt='/' layout='fill'/>
              <div className='fixed top-0 left-0 bg-black/60'></div>
              <div className='fixed w-full px-4 py-24 z-50'> 
                   <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-lg'>
                         <div className='max-w-[320px] mx-auto py-16'>
                              <h1 className='text-3xl font-bold'>Sign In</h1>
                              {error ? <p className='p-3 my-2 bg-red-500'>{error.message}</p> : null}
                              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                  <input 
                                      onChange={(e)=>setEmail(e.target.value)} 
                                      className='p-3 my-2 bg-gray-700 rounded' 
                                      type='email' placeholder='Email' 
                                      autoComplete='email'/>
                                  <input
                                      onChange={(e)=>setPassword(e.target.value)}
                                      className='p-3 my-2 bg-gray-700 rounded' 
                                      type='password' 
                                      placeholder='password' 
                                      autoComplete='current-password'
                                    />
                                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                                    <div className='flex justify-between items-center text-sm text-gray-600 font-bold'>
                                        <p><input className='mr-2' type='checkbox'/>Remember me</p>
                                        <p>Need Hlep ?</p>
                                    </div>
                                    <p className='py-8'><span className='text-gray-600'>New to Netflix ?</span><Link className='ml-1 hover:underline' href={'/signup'}>Sign Up</Link></p>
                              </form>
                         </div>
                   </div>
              </div>
          </div>  
            </>
    );
}

export default login;
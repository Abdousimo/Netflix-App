import React from 'react';
import Link from 'next/link';
import { UserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const {user,LogOut} =  UserAuth()
    const router = useRouter()
   // console.log(user);

   const handleLogout = async () => {
       try {
           await LogOut()
           router.push('/')
       } catch (error) {
            console.log(error);
       }
   } 
    return (
        <section className='w-full h-20 flex items-center justify-between px-2 md:px-7 absolute z-[100]'>
             <Link href={'/'}>
                 <h1 className='text-red-700 font-bold text-xl md:text-3xl'>NETFLIX</h1>
             </Link>
             {
                user?.email ? 
                <div>
                <Link href={'/Account'}>
                    <button className='text-white pr-3'>
                       Account
                    </button>
                </Link>
                <button onClick={handleLogout} className='bg-red-700 text-white px-6 py-2 rounded-lg'>
                    LogOut
                </button>
                
            </div>
               :
               <div>
                   <Link href={'/login'}>
                      <button className='text-white pr-3'>
                         Sign In
                      </button>
                    </Link>
                    <Link href={'/signup'}>
                        <button className='bg-red-700 text-white px-6 py-2 rounded-lg'>
                          Sign Up 
                        </button>
                    </Link>
                </div>
             }

        </section>
    );
}

export default Navbar;
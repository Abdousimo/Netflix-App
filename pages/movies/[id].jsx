import React from 'react';
import { key } from '@/components/Requests';
import Head from 'next/head';


const  Details = (props) =>  {
    return (
       <>
            <Head>
                <title>{props.movie?.title}</title>
            </Head>
           <section className='w-full h-screen text-white'>
                <div className='w-full h-full'>
                   <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
                       <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}`} alt={props.movie?.title}/> 
                       <div className='absolute top-[20%] w-full p-4 md:p-8'>
                          <h1 className='text-3xl md:text-7xl font-bold'>{props.movie?.title}</h1>
                        <div className='my-4'>
                            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                        </div>
                         <p className='text-gray-400 text-sm'>Released: {props.movie?.release_date}</p>
                         <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{props.movie?.overview}</p>
                </div>   
                </div> 
        </section>
       </>
              
        
        
    );

}


export async function getServerSideProps(context) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${key}`)
    const data = await res.json()

    return {
        props : {
            movie : data
        }
    }

    
}

export default Details;
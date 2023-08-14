import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Movie from './Movie';


const Row = ({title,fetchURL}) => {
     const [movies, setMovies] = useState([])
     
     useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
             setMovies(response.data.results)
        })
        .then((err)=>console.log(err))
     },[])

     
     
    return (
        <>
          <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
          <div className='relative flex items-center h-48'>
              <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                   {
                    movies.map((item,index)=>(
                        <Movie key={index} item={item}/>
                    ))
                   }
              </div>
          </div>  
        </>
    );
}

export default Row;
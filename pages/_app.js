import '@/styles/globals.css'
import {AuthContextProvider} from '../context/AuthContext'
import Navbar from '@/components/Navbar'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    
    <AuthContextProvider>
        <Navbar/>
        <Component {...pageProps} />
    </AuthContextProvider>
    
    
  )
}

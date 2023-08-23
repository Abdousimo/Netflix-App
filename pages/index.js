import React from 'react'
import Main from '@/components/Main'
import Row from '@/components/Row'
import requests from '@/components/Requests'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>
      <Main/>
      <Row title='TopRated' fetchURL={requests.requestTopRated}/>
      <Row title='Up Coming' fetchURL={requests.requestUpComing}/>
      <Row title='Horror' fetchURL={requests.requestHorror}/>
      <Row title='Trending' fetchURL={requests.requestTrending}/>
    </>
  )
}

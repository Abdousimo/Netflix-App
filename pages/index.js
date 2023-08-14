import React from 'react'
import Main from '@/components/Main'
import Row from '@/components/Row'
import requests from '@/components/Requests'



export default function Home() {
  return (
    <>
      <Main/>
      <Row title='TopRated' fetchURL={requests.requestTopRated}/>
      <Row title='Up Coming' fetchURL={requests.requestUpComing}/>
      <Row title='Horror' fetchURL={requests.requestHorror}/>
      <Row title='Trending' fetchURL={requests.requestTrending}/>
    </>
  )
}

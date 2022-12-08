import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

import requests from '../Requests'
const Home = () => {
  return (
    <>
        
        <Main />
        <div className='py-20 overflow-auto scrollbar-hide'>
        <h1 className='text-white font-bold text-[30px] px-2'>Movies</h1>
        <Row rowID='1' title='Upcoming' type = 'Movie' fetchURL={requests.requestUpcoming}/>
        <Row rowID='2' title='Popular' type = 'Movie' fetchURL={requests.requestPopular}/>
        <Row rowID='3' title='Trending' type = 'Movie' fetchURL={requests.requestTrending}/>
        <Row rowID='4' title='Top Rated' type = 'Movie' fetchURL={requests.requestTopRated}/>
        <Row rowID='5' title='Horror' type = 'Movie' fetchURL={requests.requestHorror}/>
        <h1 className='text-white font-bold text-[30px] px-2 py-3'>TV Shows</h1>
        <Row rowID='6' title='Popular' type ='Show' fetchURL={'https://api.themoviedb.org/3/tv/popular?api_key=2974558603f942cd73ecb0ba9db30e40&language=en-US&page=1'}/>
        <Row rowID='9' title='Top Rated' type ='Show' fetchURL={'https://api.themoviedb.org/3/tv/top_rated?api_key=2974558603f942cd73ecb0ba9db30e40&language=en-US&page=1'}/>
        <div className='text-white flex justify-center object-bottom'>
          Created By: Manas Katta
          <br></br>
          E-mail: manas.katta@gmail.com
          
        </div>
        </div>
    </>
  )
}

export default Home

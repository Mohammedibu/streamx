import React, { useEffect, useState } from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'

import Footer from '../../components/Footer/Footer'
import axios from '../../axios'
import requests from '../../Request'

import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchHorrorMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();

  }, []);

 
  

  function truncate(string, n) {
    return string?.length > n ? string.substr(0,n-1) + " . . ." : string;
  }
  return (
    <div className='home'>
      <Navbar/>
      <header 
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center",
      }}
      >
        <div className="banner__contents">
          <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
            
          </div>
          <h1 className="banner__description">
             {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className=' banner--fadeBottom'/>

        
      

      </header>
      <TitleCards />
      <div className="more-cards">
      <TitleCards title={"BlockBuster Movies"} category={"top_rated"} />
      <TitleCards title={"Upcoming"}  category={"popular"}/>
      <TitleCards title={"Top Rated"} category={"upcoming"}/>
  
      
      </div>

      
      
      
     
     
      <Footer/>
      
    </div>
  )
}

export default Home;

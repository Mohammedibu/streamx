import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import cards_data from "../../assets/netflix_react_assets/assets/cards/cards/Cards_data"
import { Link } from 'react-router-dom'



const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDJiNDYwYjViNjdiMWY3ZjNjNWRkZTc4MjJiYTg3NCIsIm5iZiI6MTc0MDMyNjUzNC42ODEsInN1YiI6IjY3YmI0Njg2YTk2ZGMxODk3OWJlYzZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DpvAQjoxnikgT45fh36Me2aM7UrWR5nW2ng44s-MPqs'
  }
};



const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() =>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));


  cardsRef.current.addEventListener("Wheel", handleWheel);

}, [])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on StreamX"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
            return <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=""  />
                <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards

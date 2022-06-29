import React from 'react'
import './Home.css';
import DisplayCarousel from "./HomepageCarousel/DisplayCarousel";

function Home() {
  return (
    <div>
        <div className='homepage-image'>
            <img src={process.env.PUBLIC_URL + '/familydog.jpeg'} alt="xyz"/>
            <div className='centred'>Say Hello to Your New Best Friend</div>
        </div>
        <div className='display_carousel'>
        <DisplayCarousel />
        </div>
    </div>
  )
}

export default Home
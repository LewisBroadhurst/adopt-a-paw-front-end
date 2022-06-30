import React from 'react'
import './Home.css';
import DisplayCarousel from "./HomepageCarousel/DisplayCarousel";

function Home() {
  return (
    <div>
        {/* <div className='homepage-image'>
            <img src={process.env.PUBLIC_URL + '/familydog.jpeg'} alt="xyz"/>
            <div className='centred'>Say Hello to Your New Best Friend</div>
        </div> */}

        <section className='c-hero'>

          <div className='c-shape'>
            <div className='hero-video'>
              <video autoPlay muted loop poster='https://woodgreen.org.uk/wp-content/uploads/2022/05/tokyo-summer-banner-img.jpg' id="html5_video_gc9ibputb4" src="https://woodgreen.org.uk/wp-content/uploads/2022/05/tokyo-summer-banner-1.mp4">
              </video>
            </div>
          </div>

          <div className='c-hero__content-container'>
            <div className='c-hero-content'>
              <h1 className='c-hero-title'>Your new best friend is waiting for you!</h1>
              <h2 className='c-hero-subtitle h4'>
                You never know who you'll meet and bond with.
                <br></br>
                Because you can't choose the perfect pet.
                <br></br>
                You find each other.
              </h2>
              <div className='c-hero-adopt-button'>
                <a href='http://localhost:3000/adopt' className='hero-button'>Adopt today!</a>
              </div>
            </div>
          </div>
        </section>


        <div className='display_carousel'>
        <DisplayCarousel />
        </div>
    </div>
  )
}

export default Home
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './Home.css';
import DisplayCarousel from "./HomepageCarousel/DisplayCarousel";
import wwf_logo from "./images/wwf_logo.jpeg";
import rspca_logo from "./images/rspca_logo.png";
import battersea_gif from "./images/battersea.gif";

function Home() {
  return (
    <>
        <section className='hero'>

          <div className='hero-shape'>
            <div className='hero-video'>
              <video autoPlay muted loop poster='https://woodgreen.org.uk/wp-content/uploads/2022/05/tokyo-summer-banner-img.jpg' id="html5_video_gc9ibputb4" src="https://cdn.videvo.net/videvo_files/video/free/2021-08/large_watermarked/210804_01_Dog%20Walk_4k_029_preview.mp4">
              </video>
            </div>
          </div>

          <div className='hero__content-container'>
            <div className='hero-content'>
              <h1 className='hero-title'>Your new best friend is waiting for you!</h1>
              <h2 className='hero-subtitle'>
                You never know who you'll meet and bond with.
                <br></br>
                Because you can't choose the perfect pet.
                <br></br>
                You find each other.
              </h2>
              <div className='hero-adopt-button'>
                <a href='http://localhost:3000/adopt' className='hero-button'>Adopt today!</a>
              </div>
            </div>
          </div>
        </section>

        <section className='homePage__ourMission--container'>

          <span>Our Mission</span>

          <p>At Adopt A Paw, we believe all animals have the right to live in a happy home, with a loving family.</p>
          <p>This is why we work with reputable shelters to rehome the wonderful animals they have to offer.</p>
          <p>Our goal is to match these beautiful animals with caring owners (you!), so they can live a life of joy <FontAwesomeIcon icon={faPaw} /></p>


        </section>

        <section className='homePage__ourPartners--container'>

          <span>Our Partners</span>

          <p>We only work with the best in the industry. The RSPCA, WWF, Battersea Cats & Dogs Shelter, and more, are all close partners who trust us with their rehoming needs.</p>

          <section className='homePage__parentLogoCont'>
            <div className='homePage__logoContainer'>
              <img src={wwf_logo} alt='' />
            </div>

            <div className='homePage__logoContainer'>
              <img src={battersea_gif} alt='' />
            </div>

            {/* <div className='homePage__logoContainer'>
              <img src={rspca_logo} alt='' />
            </div> */}
          </section>
        
        </section>


        <div className='display_carousel'>
        <DisplayCarousel />
        </div>
    </>
  )
}

export default Home
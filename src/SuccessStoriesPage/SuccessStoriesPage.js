import React from 'react'
import "./SuccessStories.css"
import "./SuccessStoriesTablet.css"
import "./SuccessStoriesLaptop+.css"

const SuccessStoriesPage = () => {
  return (
    <>
        <main id="SS-Page-Main">

            <h2 className='SuccessTitle'>Success Stories</h2>

            <>
                <section className="SS-Container">
        
                    <div className="SS-Img-Div">
                        <img className="SS-Img" src={require("./images/Gizmo.jpeg")}/>
                    </div>

                    <div className="SS-Text-Div">
                        <h3>Gizmo</h3>
                        <p>Fourteen-year-old Staffy, Gizmo, came to the Shelter when his owner moved and was unable to take him to their new home. Despite his age, he is full of beans and quickly made friends with everyone he met. It often takes longer to find older dogs the right match but, happily for Gizmo, he stole the hearts of new owner Chelsea and went home in May, three months after arriving.</p>
                    </div>

                </section>

                <section className="SS-Container">
        
                    <div className="SS-Img-Div">
                        <img className="SS-Img" src={require("./images/Ernie.jpeg")}/>
                    </div>

                    <div className="SS-Text-Div">
                        <h3>Ernie</h3>
                        <p>Three-year-old Ernie came to the Shelter as a stray when people noticed he had been roaming around for over a month and was showing signs of neglect. Ernie was very friendly with our staff and soon caught the eye of his new owner, Jenny.</p>
                    </div>

                </section>

                <section className="SS-Container">
        
                    <div className="SS-Img-Div">
                        <img className="News-Img" src={require("./images/MillyFrankie.jpeg")}/>
                    </div>

                    <div className="SS-Text-Div">
                        <h3>Milly & Frankie</h3>
                        <p>These two adorable domestic shorthaired cats were brought to the Shelter when their owner sadly passed away. Mum Milly is 10 and Frankie her daughter is eight.</p>
                        <br></br>
                        <p>Six weeks after arriving at the Shelter they went to their happy new home with Colin, who recently sent us this lovely photo.</p>
                    </div>

                </section>

                <section className="SS-Container">
        
                  <div className="SS-Img-Div">
                      <img className="News-Img" src={require("./images/Buzz.jpeg")}/>
                  </div>

                  <div className="SS-Text-Div">
                      <h3>Buzz</h3>
                      <p>Beautiful Bulldog, Buzz, was brought to the Shelter as a stray in December 2021. This lovely chap was only seven-months-old at the time and sadly his owner could not be traced. It is no surprise that it didn’t take long for someone to adopt him and he went to his new family just one month later.</p>
                  </div>

                </section>
                
            </>

            


        </main>
    </>
  )
}

export default SuccessStoriesPage
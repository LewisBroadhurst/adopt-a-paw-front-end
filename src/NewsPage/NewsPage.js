import "./NewsPage.css";

const NewsPage = () => {
  return (
    <>
        <main id="News-Page-Main">

            <h2>News</h2>

            <>
                <section className="News-Container">
        
                    <div className="News-Img-Div">
                        <img className="News-Img" src={require("./images/1.jpeg")}/>
                    </div>

                    <div className="News-Text-Div">
                        <h3>RSPCA disappointment by puppy trading and overworked horses at Appleby</h3>
                        <p>15/06/22</p>
                        <p>Police and welfare officers called to assist with a number of animal welfare concerns at Appleby Horse Fair last weekend, including incidents involving horses, dogs and chickens.</p>
                    </div>

                </section>

                <section className="News-Container">
        
                    <div className="News-Img-Div">
                        <img className="News-Img" src={require("./images/2.jpeg")}/>
                    </div>

                    <div className="News-Text-Div">
                        <h3>Experts highlight 'urgent' need to rethink human-animal relationship</h3>
                        <p>10/06/22</p>
                        <p>The RSPCA has published a collection of essays from global thought leaders to kick off a mission to reposition animal welfare from a niche to a more mainstream policy position.</p>
                    </div>

                </section>

                <section className="News-Container">
        
                    <div className="News-Img-Div">
                        <img className="News-Img" src={require("./images/3.jpeg")}/>
                    </div>

                    <div className="News-Text-Div">
                        <h3>Genetic technology bill: A serious step back for animal welfare</h3>
                        <p>08/06/22</p>
                        <p>The government has today announced new legislation through the Genetic Technology (Precision Breeding) Bill to allow regulations around gene editing of crops - and eventually animals - to be relaxed in the UK.</p>
                    </div>

                </section>

                <section className="News-Container">
        
                    <div className="News-Img-Div">
                        <img className="News-Img" src={require("./images/4.jpeg")}/>
                    </div>

                    <div className="News-Text-Div">
                        <h3>Shocking death of little fox cub tangled in garden football net triggers renewed warning</h3>
                        <p>06/06/22</p>
                        <p>We're renewing our warning of the dangers to wildlife of netting after a little fox cub was strangled to death in a back garden football net.</p>
                    </div>

                </section>

                <section className="News-Container">
        
                    <div className="News-Img-Div">
                        <img className="News-Img" src={require("./images/5.jpeg")}/>
                    </div>

                    <div className="News-Text-Div">
                        <h3>Don't 'bring and buy' dogs or other animals at Appleby Horse Fair</h3>
                        <p>02/06/22</p>
                        <p>Welfare charity concerned after sick puppies sold at last year's horse fair.</p>
                    </div>

                </section>

                <section className="News-Container">
        
                    <div className="News-Img-Div">
                        <img className="News-Img" src={require("./images/6.jpeg")}/>
                    </div>

                    <div className="News-Text-Div">
                        <h3>Men sentenced to community service and ban for cat attack Snapchat video</h3>
                        <p>28/05/22</p>
                        <p>A footballer has been sentenced to 180 hours community service for causing unnecessary suffering after his brother filmed him kicking and hitting a cat and posted it online.</p>
                    </div>

                </section>
            </>

            


        </main>
    </>
  )
}

export default NewsPage
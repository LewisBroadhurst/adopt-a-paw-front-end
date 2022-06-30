import "./GetInvolvedPage.css";

const GetInvolvedPage = () => {
    return (
        <>
       <section className="GIMain">

       <h2 className="header">Get Involved</h2>

        <section className="flexbox">

        <div className="flexbox_div"><img className="get_involved_image" src={require("./images/Volunteer.jpeg")}/><h3 className="title">Volunteer with us</h3><p className="paragraph">Do something rewarding for animal welfare. Search for a volunteer vacancy today.</p></div>
        <div className="flexbox_div"><img className="get_involved_image" src={require("./images/Campaign.jpeg")}/><h3 className="title">Campaign for animal welfare</h3><p className="paragraph">We aim to prompt political and behavioural change on a range of anaimal welfare related issues.</p></div>
        <div className="flexbox_div"><img className="get_involved_image" src={require("./images/Donate.jpeg")}/><h3 className="title">Make a donation</h3><p className="paragraph">Give whatever you can to help give animals a second chance.</p></div>
        <div className="flexbox_div"><img className="get_involved_image" src={require("./images/Fundraise.jpeg")}/><h3 className="title">Fundraise for animals</h3><p className="paragraph">From cake bakes to sky dives - check out our fundraising ideas.</p></div>
        <div className="flexbox_div"><img className="get_involved_image" src={require("./images/Member.jpeg")}/><h3 className="title">Become a member</h3><p className="paragraph">Join us as a member to help fight to improve animal welfare.</p></div>
        <div className="flexbox_div"><img className="get_involved_image" src={require("./images/Young.jpeg")}/><h3 className="title">Young Adopt-a-paw</h3><p className="paragraph">Check out our Young Adopt-a-paw site, full of games, facts and competitions.</p></div>

        </section>

       </section>

        
        
        </>

    )}


export default GetInvolvedPage
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./AdvicePage.css";

const AdvicePage = () => {
    return (

        <>
        <Header />
        <main id="Advice-Page-Main"></main>

        <h1 className="header">Advice</h1>
        
        <section className="advice_container class">
        
            <div className="advice_text_div">
                <img className="advice_image" src={require("./images/HowToRehome.jpeg")}/>
                <br/>
                <h3>Rehome a rescued pet</h3>
                <p>Rehoming a pet is all about ensuring you're matched with the perfect pet for you, so that you and your new pet can have a fantastic life together. From finding each other online to bringing your newest family member home, we've got all the information you need to help you find each other.</p>
                <br/>
                <h3>Who can rehome a rescued pet?</h3>
                <p>Anyone can rehome a rescued animal from us - what's important is matching you, and your family, with the right animal, which will be based on their needs, and yours.</p>
                <br/>
                <h3>What happens next?</h3>
                <p>Once you and your pet have found each other, we'll help you get ready to welcome them into your family. We'll arrange for one of our adoption staff or volunteers to call you.</p>
                <br/>
                <p>They'll discuss with you any specific needs that your pet has, and suggest any adjustments to your house, garden or lifestyle that may be needed to help you and your rescue pet settle into a safe, secure and happy life together.</p>
                <br/>
                <p>Introducing a new pet to your home will be exciting, rewarding and, at times, challenging. It may take quite a while for your new pet to settle into life with you, but don't worry, if you do encounter some tricky bits with your new pet, you're not alone - we're here to support you.</p>
                <br/>
                <p>Please be aware that due to local Covid restrictions there might be additional requirements or different processes in certain areas, so please contact your local centre first to check their rehoming process.</p>
                <br/>
            </div>

         </section>
        <Footer />
        </>

    )}

export default AdvicePage

    
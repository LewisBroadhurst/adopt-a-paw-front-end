import "./OrganisationsPage.css";
import rspca_1 from "./images/rspca_1.jpeg";
import dogs_trust1 from "./images/dogs_trust1.jpeg";
import battersea_1 from "./images/battersea_1.jpeg";
import wwf_logo from "./images/wwf_logo1.jpg";
import battersea_gif from "./images/battersea_gif_crop.gif";
import dogs_trust_logo from "./images/dogs_trust.webp";
import blue_cross_logo from "./images/blue_cross_logo.png";
import woodgreen_logo from "./images/woodgreen_logo.png";


const OrganisationsPage = () => {
  return (
    <>
        <main id="Organisation-Page-Main">

          <section className="orgPage__mainHeader--pos">
            <span>Our Partner Organisations</span>

            <section className="orgPage__logoBar--pos">
              <ul className="op_lb_pos">
                <li><img src={wwf_logo} alt='' /></li>
                <li><img src={battersea_gif} alt='' /></li>
                <li><img src={dogs_trust_logo} alt='' /></li>
                <li><img src={blue_cross_logo} alt='' /></li>
                <li> <img src={woodgreen_logo} alt='' /></li>
              </ul>
            </section>
  
          </section>

          <section className="orgPage__orgList--pos">

            <section className="orgPage__orgContV1">
              <h2>RSPCA</h2>
              <p>A world where all animals are respected and treated with kindness and compassion.</p>

              <p>We're the Royal Society for the Prevention of Cruelty to Animals (RSPCA) and we've been here for animals since 1824. We're the world's oldest and largest animal welfare charity, with the primary focus of rescuing, rehabilitating and rehoming or releasing animals across England and Wales.</p> 
              
              <p>Every day, with the help of our people and our generous supporters, we take steps to achieve our mission.</p>
            </section>

            <div className="OP__imgCont--pos">
              <img src={rspca_1} alt="" />
            </div>

            <div className="OP__imgCont--pos">
              <img src={dogs_trust1} alt="" className="OP_DT"/>
            </div>

            <section className="orgPage__orgContV1">
              <h2>Dogs Trust</h2>

              <p>Today, many dog owners think of their pet as a member of the family. But when we were founded in the nineteenth century, attitudes were very different.</p>

              <p>For most people, dogs were there to do a job. Cruel practices, such as prolonged chaining, were common.</p>

              <p>In 1891, Lady Gertrude Stock started the National Canine Defence League. Her small group vowed to campaign against cruelty.</p>

              <p>In the decades that followed, the League continued to campaign for better dog welfare. It increased rehoming, survived two world wars and worked with partners overseas.</p>

              <p>We became Dogs Trust in 2003. Since then, we’ve celebrated many successes, from helping to change laws to launching our Dog School.</p>

              <p>We’re the UK’s leading dog welfare charity  – and we’re proud of the many milestones in our history. You can read more about them in our timeline below.</p>
            </section>

            <section className="orgPage__orgContV1">
              <h2>Battersea</h2>

              <p>From the moment we welcomed our first stray dog in 1860 we have been placing our animals at the centre of everything we do. More than three million animals later, we're still working hard to achieve our vision that every dog and cat should live in a home where they are treated with love, care and respect.</p>

              <p>Battersea aims to never turn away a dog or cat in need of help, caring for them until their owners or loving new homes can be found, no matter how long it takes. We are champions for, and supporters of, vulnerable dogs and cats, determined to create lasting changes for animals in our society.</p>
            </section>

            <div className="OP__imgCont--pos">
              <img src={battersea_1} alt="" />
            </div>

          </section>

        </main>
    </>
  )
}

export default OrganisationsPage
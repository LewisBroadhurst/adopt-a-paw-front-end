import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DonatePageBasic.css";
import FamDog1 from "./images/img1.jpeg";
import Tab1 from "./images/tab1.jpeg";
import Tab2 from "./images/tab5.jpeg";
import Tab3 from "./images/tab3.jpeg";
import Tab4 from "./images/tab4.jpeg";
import Tab5 from "./images/tab2.jpeg";
import Tab6 from "./images/tab6.jpeg";

const DonatePage = () => {
  return (
    <>
        <main id="Donate-Page-Main">
            <img src={FamDog1} alt="family with dog" />

            <h2>Donate</h2>

            <p className="Donate-Cause">We rely on donations to continue our work across the country. Every pound raised enables us to continue to help pets and people who need our support. Your donation supports our community partner across the UK to achieve the following:</p>

            <p className="Donate-LL">What does your donation look like?</p>

            <section id="Donate-FlexGrid-Cont">

                <section className="Don-Cause-Tab">
                    <img src={Tab1} alt="worm a cat" />
                    <span>£3</span>
                    <p>Could worm a cat in a rescue centre</p>
                </section>

                <section className="Don-Cause-Tab">
                    <img src={Tab3} alt="assistance dog" />
                    <span>£5</span>
                    <p>Could pay for a working assistance dog for a day</p>
                </section>

                <section className="Don-Cause-Tab">
                    <img src={Tab4} alt="fund emergency vet" />
                    <span>£20</span>
                    <p>Could fund an emergency vet appointment for a dog in need</p>
                </section>

                <section className="Don-Cause-Tab">
                    <img src={Tab2} alt="days training for assistance dog" />
                    <span>£25</span>
                    <p>Could pay for days training of an assistance dog</p>
                </section>

                <section className="Don-Cause-Tab">
                    <img src={Tab5} alt="spay a rescue cat" />
                    <span>£30</span>
                    <p>Could spay a rescue cat and prevent unwanted litters</p>
                </section>

                <section className="Don-Cause-Tab">
                    <img src={Tab6} alt="emergency dog kenneling" />
                    <span>£50</span>
                    <p>1 week of emergency kennelling for an individuals pet who is fleeing domestic abuse</p>
                </section>

            </section>

            <form id="Donate-AAP">
                <label>£ Donation amount</label>
                <input type="textbox" />

                <label>First Name *</label>
                <input type="textbox" />

                <label>Last Name</label>
                <input type="textbox" />

                <label>Email Address *</label>
                <input type="email" />

                <span>Donation total:</span>
                <span>£50.00</span>

                <button type="submit">Donate Now <FontAwesomeIcon icon={faPaw} /></button>
            </form>
        </main>
    </>
  )
}

export default DonatePage
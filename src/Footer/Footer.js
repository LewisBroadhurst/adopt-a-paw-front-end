import "./Footer.css";


const Footer = () => {
  return (
    <>
        <footer className="Generic-Footer">

            <section className="Newsletter-Footer">
                <h3>Newsletter</h3>
                <p>Sign up to be informed about our work and how you can help, such as fundraising, campaigning and events. You can unsubscribe at any time.</p>
                
                <form className="Subscribe-Footer-Form">
                    <input type="email" placeholder="Enter your email here" />
                    <button type="submit">Subscribe!</button>
                </form>
            </section>

            <section className="Social-About-Legal-Container">

                <section className="SocialMedia-Footer">
                    <h3>Social Media</h3>
                    <ul>
                        <li className="text_link"><a href="https://twitter.com/">Twitter</a></li>
                        <li className="text_link"><a href="https://www.instagram.com/">Instagram</a></li>
                        <li className="text_link"><a href="https://en-gb.facebook.com/">Facebook</a></li>
                        <li className="text_link"><a href="https://www.snapchat.com/en-GB">Snapchat</a></li>
                        <li className="text_link"><a href="https://www.tiktok.com/en/">TikTok</a></li>
                    </ul>
                </section>

                <section className="About-Us-Footer">
                    <h3>About Us</h3>
                    <ul>
                        <li className="text_link">Contact Us</li>
                        <li className="text_link">Our History</li>
                        <li className="text_link">Careers</li>
                        <li className="text_link">FAQ</li>
                    </ul>
                </section>

                <section className="Legal-Footer">
                    <h3>Legal</h3>
                    <ul>
                        <li className="text_link">Terms and Conditions</li>
                        <li className="text_link">Cookies</li>
                        <li className="text_link">Privacy Notice</li>
                    </ul>
                </section>

            </section>

        </footer>
        
    </>
  )
}

export default Footer
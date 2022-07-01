import "./CreateAccPage.css";

const CreateAccPage = () => {

  return (
    <>
        <main className="cap__main--positioning">
            <p>This is your first step to taking a happy Animal home!</p>
            <p>Thank you, from us, our partner organisations, and most importantly, <span>our animals</span></p>

            <section className="cap__imgCont--positioning">
                <img className="" src="" alt="happy doge" />
            </section>

            <form className="cap__form--positioning">
                <div className="cap__form--id">
                    <label>ID</label>
                    <input type="text"></input>
                </div>

                <div className="cap__form--firstName">
                    <label>First Name</label>
                    <input type="text"></input>
                </div>

                <div className="cap__form--lastName">
                    <label>Last Name</label>
                    <input type="text"></input>
                </div>

                <div className="cap__form--age">
                    <label>Age</label>
                    <input type="text"></input>
                </div>

                <div className="cap__form--location">
                    <label>Location</label>
                    <input type="text"></input>
                </div>

                <div className="cap__form--prevAdopted">
                    <label>Previously Adopted?</label>
                    <input type="text"></input>
                </div>

                <button type="submit">Create Account</button>
            </form>

            
        </main>
    </>
  )
}

export default CreateAccPage
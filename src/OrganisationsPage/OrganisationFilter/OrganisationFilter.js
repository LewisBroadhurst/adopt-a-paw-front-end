import "./OrgansFilt.css";


const OrganisationFilter = () => {

    const checkInput = () => {
        const input = document.querySelector("#LCL-Input");

        console.log(input.value)

        if (input.value) {
            console.log("Hello World!")
            input.style.backgroundColor = "blue";
        }
    }

  return (
    <>
        <section className="Org-Filter-Bar">

            <h4>Filters:</h4>

            <form className="Org-Filter-Form">

                <div className="Name-Check-Label">
                    <input type="text" className="Filt-Input-Org" />
                    <label htmlFor="Org-Name-Filt">Name</label>
                </div>
                
                <div className="Location-Check-Label">
                    <input id="LCL-Input" type="text" className="Filt-Input-Org" onChange={checkInput}/>
                    <label>Location</label>
                </div>
                

            </form>

        </section>
    
    </>
  )
}

export default OrganisationFilter
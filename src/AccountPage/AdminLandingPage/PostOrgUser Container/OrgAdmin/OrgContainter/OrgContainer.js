import "./OrgContainer.css";


const OrgContainer = ( {name, id} ) => {

    const handleDeleteOrganisation = () => {
        console.log(id);
    }

  return (
    <>
        <section className='Post-Admin-Cont'>
            <span>{name}</span>

            <p>A world where all animals are respected and treated with kindness and compassion.</p>

            <span>Posted: 11/22/3333</span>

            <div className='OC__form--formContainer'>
                <div className="OC__form--updateName">
                    <button type='button'>Update name</button>
                    <input type="text"></input>
                </div>
                
                <button type='button'>Reject and Delete</button>
            </div>
        </section>
    </>
  )
}

export default OrgContainer
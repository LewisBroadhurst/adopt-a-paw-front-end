import React, { useEffect, useState } from 'react'
import { getAllSpecies } from '../../API';

function AnimalFilter(props) {

    const [allSpecies, setAllSpecies] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState("");
    const [selectedMinAge, setSelectedMinAge] = useState(0);

    useEffect(() => {
        getAllSpecies(setAllSpecies)
    }, []);

    const handleChangeSelectedSpecies = (event) => {
        setSelectedSpecies(event.target.value);
        console.log("Selected species: ", event.target.value)
    }

    const handleChangeSelectedMinAge = (event) => {
        setSelectedMinAge(event.target.value);
    }

    const handleSubmit = () => {
        // const filter2Send = {};
        // if (selectedSpecies && selectedSpecies.length() >0) {
        //     filter2Send.species = selectedSpecies
        // }

        props.setFilter({ species: selectedSpecies, minAge: parseInt(selectedMinAge)})
    }

    console.log("allsSPecies", allSpecies)
    return (
        <>
            <form>
                <label>Select species
                    <select value={selectedSpecies} onChange={handleChangeSelectedSpecies}>
                        <option value={null}></option>
                        {allSpecies.map(s => <option value={s}>{s}</option>)}
                    </select>
                </label>
                <label>Minimum age
                    <input type="number"
                    value={selectedMinAge}
                    onChange={handleChangeSelectedMinAge}
                    >
                    </input>
                </label>
            </form>
            <button onClick={handleSubmit}>Update</button>
        </>
    )
}

export default AnimalFilter
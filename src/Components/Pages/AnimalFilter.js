import React, { useEffect, useState } from 'react'
import { getAllSpecies } from '../../API';

function AnimalFilter(props) {

    const [allSpecies, setAllSpecies] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState({});

    useEffect(() => {
        getAllSpecies(setAllSpecies)
    }, []);

    const handleChangeSelectedSpecies = (event) => {
        setSelectedSpecies(event.target.value);
        console.log("Selected species: ", event.target.value)
    }

    const handleSubmit = () => {
        props.setFilter({species: selectedSpecies})
    }

    console.log("allsSPecies", allSpecies)
    return (
        <>
            <form>
                <select value={selectedSpecies} onChange={handleChangeSelectedSpecies}>
                    <option></option>
                    {allSpecies.map(s => <option value={s}>{s}</option>)}
                </select>
            </form>
            <button onClick={handleSubmit}>Update</button>
        </>
    )
}

export default AnimalFilter
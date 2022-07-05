import React, { useEffect, useState } from 'react'
import { getAllSexes, getAllSpecies } from '../../API';

function AnimalFilter(props) {

    const [allSpecies, setAllSpecies] = useState([]);
    const [allSexes, setAllSexes] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState("");
    const [selectedMinAge, setSelectedMinAge] = useState(0);
    const [selectedMaxAge, setSelectedMaxAge] = useState(100);
    const [selectedSex, setSelectedSex] = useState();
    const [selectedAvailableOnly, setSelectedAvailableOnly] = useState(false);

    useEffect(() => {
        getAllSpecies(setAllSpecies)
    }, []);

    useEffect(() => {
        getAllSexes(setAllSexes)
    }, []);

    const handleChangeSelectedSpecies = (event) => {
        setSelectedSpecies(event.target.value);
        console.log("Selected species: ", event.target.value)
    }

    const handleChangeSelectedMinAge = (event) => {
        setSelectedMinAge(event.target.value);
    }

    const handleChangeSelectedMaxAge = (event) => {
        setSelectedMaxAge(event.target.value);
    }

    const handleChangeSelectedSex = (event) => {
        setSelectedSex(event.target.value);
    }

    const handleChangeAvailableOnly = () => {
        setSelectedAvailableOnly(!selectedAvailableOnly);
    }

    const handleSubmit = () => {
        // const filter2Send = {};
        // if (selectedSpecies && selectedSpecies.length() >0) {
        //     filter2Send.species = selectedSpecies
        // }

        props.setFilter({ 
            species: selectedSpecies,
            sex: selectedSex,
            minAge: parseInt(selectedMinAge),
            maxAge: parseInt(selectedMaxAge),
            availableOnly: selectedAvailableOnly
        })
    }

    console.log("allsSPecies", allSpecies)
    return (
        <div className='filtersContainer'>
            <form className='filterForm'>
                <label>Select species
                    <select 
                    name="selectedSpecies"
                    value={selectedSpecies} 
                    onChange={handleChangeSelectedSpecies}>
                        <option value={null}></option>
                        {allSpecies.map(s => <option value={s}>{s}</option>)}
                    </select>
                </label>
                <label>Sex
                    <select
                    name="selectedSex"
                    value={selectedSex}
                    onChange={handleChangeSelectedSex}
                    >
                        <option value={null}></option>
                        {allSexes.map(s => <option value={s}>{s}</option>)}
                    </select>
                </label>
                <label>Minimum age
                    <input 
                    name="minAge"
                    type="number"
                    value={selectedMinAge}
                    onChange={handleChangeSelectedMinAge}
                    >
                    </input>
                </label>
                <label>Maximum age
                    <input 
                    name="maxAge"
                    type="number"
                    value={selectedMaxAge}
                    onChange={handleChangeSelectedMaxAge}
                    >
                    </input>
                </label>
                <label>Show only available animals
                    <input
                    name="availableOnly"
                    type="checkbox"
                    onChange={handleChangeAvailableOnly}
                    >
                    </input>
                </label>
            </form>
            <button class="selectFilterButton" onClick={handleSubmit}>Update</button>
        </div>
    )
}

export default AnimalFilter
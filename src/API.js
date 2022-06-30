import axios from 'axios';

export function getAnimalsFilter (setAnimals, name, minAge, maxAge, sex, location, availableOnly){
    axios.get('http://127.0.0.1:8080/animal/filteranimals', null, {params: name, minAge, maxAge, sex, location, availableOnly})
    .then(res => {
        const animals = res.data;
        console.log(animals)
    setAnimals(animals)
    }).catch((err) => console.log(err));
}
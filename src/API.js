import axios from 'axios';

export function getAnimalsFilter (setAnimals, name, minAge, maxAge, sex, location, availableOnly){
    axios.get('http://127.0.0.1:8080/animal/filteranimals', null, {params: name, minAge, maxAge, sex, location, availableOnly})
    .then(res => {
        const animals = res.data;
        console.log(animals)
    setAnimals(animals)
    }).catch((err) => console.log(err));
}

export function getAnimalByID (setAnimal, id){
    axios.get(`http://127.0.0.1:8080/animal/${id}`)
    .then(res => {
        const animal = res.data;
        setAnimal(animal);
    }).catch((err) => console.log(err))
}

export function getOrganisations(setOrganisations) {
    axios.get(`http://127.0.0.1:8080/findAllOrganisations`)
        .then(res => {
            const organisations = res.data;
            setOrganisations(organisations)
        })
        .catch((err) => console.log(err))
}

export function getCustomers(setCustomers) {
    axios.get(`http://127.0.0.1:8080/findAllCustomers`)
        .then(res => {
            const customers = res.data;
            setCustomers(customers)
        })
        .catch((err) => console.log(err))
}

export function deleteCustomer(id) {
    axios.get(`http://127.0.0.1:8080/deleteCustomer/${id}`)
        .then(res => console.log(res))
        .catch((err) => console.log(err))
}


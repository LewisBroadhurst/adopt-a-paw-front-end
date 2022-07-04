import axios from 'axios';

// ANIMALS

export const getAnimalsFilter = async (setAnimals, name, minAge, maxAge, sex, location, availableOnly) => {
    try {
        const response = axios.get('http://127.0.0.1:8080/animal/filteranimals', null, {params: name, minAge, maxAge, sex, location, availableOnly});
        const animals = (await response).data;
        setAnimals(animals);
    } catch (e) {
        console.log(e)
    }
}

export const getAnimalByID = async (setAnimal, id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/animal/findAnimalById/${id}`);
        const animal = response.data;
        setAnimal(animal);
    } catch (e) {
        console.log(e)
    }   
}


export const getAllAnimals = async (setAnimals) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/animal/getAllAnimals`);
        console.log("Next...", response.data)
        const animals = response.data;
        setAnimals(animals);
    } catch (err) {
        console.log(err)
    } 
}


export const deleteAnimal = async (id) => {
    try {
        console.log(`ID: ${id}`);
        const response = await axios.delete(`http://127.0.0.1:8080/animal/deleteAnimal/${id}`);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const addAnimal = async (animalData) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/animal/addNewAnimal`, animalData)
        console.log(response)
    } catch (err) {
        console.log(err);
    }
}

export const updateAnimal = async (id, animalData) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8080/animal/updateAnimal/${id}`, animalData)
        console.log(response)
    } catch (err) {
        console.log(err);
    }
}


// ORGANISATIONS


export const getOrganisations = async (setOrganisations) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/organisation/findAllOrganisations`);
        const organisations = response.data;
        console.log(response.data);
        setOrganisations(organisations);
    } catch (err) {
        console.log(err);
    }   
}

export const getOrganisationById = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/organisation/findOrganisationByID/${id}`);
        const organisation = response.data;
        console.log(response.data);
        return organisation;
    } catch (err) {
        console.log(err)
    }
}

export const deleteOrgansation = async (id) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8080/organisation/deleteOrganisation/${id}`);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }  
}

export const updateOrganisation = async (id, orgData) => {
    try{
        const response = await axios.put(`http://127.0.0.1:8080/organisation/updateOrganisation/${id}`, orgData);
        console.log(response.data);
    } catch (err) {
        console.log(err)
    }
}

// CUSTOMERS

export const getCustomers = async (setCustomers) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/customer/findAllCustomers`);
        const customers = response.data;
        setCustomers(customers);
    } catch (err) {
        console.log(err);
    }     
}

export const deleteCustomer = async (id) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8080/customer/deleteCustomer/${id}`);
        console.log(response.data);
    } catch (err) {
        console.log(err)
    }
}

export const addNewCustomer = async (custData) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/customer/addNewCustomer`, custData);
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

// APPLICATIONS

export const getAllApplications = async (setApplications) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/application/findAll`);
        const applications = response.data;
        setApplications(applications);
    } catch (err) {
        console.log(err);
    }
}

export const deleteAdoptionApplication = async (id) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8080/application/deleteApplication/${id}`);
        console.log(response.data);
    } catch (err) {
        console.log(err)
    }
}

export const updateAdoptionApplication = async (id, application_status) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8080/application/updateApplicationStatus/${id}`, null, {params: {application_status}});
        console.log(response.data);
    } catch (err) {
        console.log(err)
    }
}

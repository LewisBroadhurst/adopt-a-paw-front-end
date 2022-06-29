DROP TABLE IF EXISTS sex_enums;
DROP TABLE IF EXISTS customer_preferences_mapper;
DROP TABLE IF EXISTS animal_types;
DROP TABLE IF EXISTS application_types;
DROP TABLE IF EXISTS customer_preferences_mapper;
DROP TABLE IF EXISTS animal_types;
DROP TYPE IF EXISTS sex;
DROP TYPE IF EXISTS application_status;
DROP TYPE IF EXISTS species_types;


CREATE TYPE species_types AS ENUM (
'Dog',
'Cat',
'Snake',
'Rabbit',
'Guinea-Pig'
);


CREATE TABLE animal_types (

    id SERIAL PRIMARY KEY,
    species species_types

);

CREATE TABLE customer_preferences_mapper (
    species_id INTEGER,
    customer_id INTEGER,
    FOREIGN KEY (species_id) REFERENCES animal_types (id),
    FOREIGN KEY (customer_id) REFERENCES customers (id)


);



ALTER TABLE animals ADD FOREIGN KEY (species_id) REFERENCES animal_types(id);
ALTER TABLE animals ADD FOREIGN KEY (organisation_id) REFERENCES organisations(id);


CREATE TYPE sex AS ENUM (
'Male',
'Female',
'Unknown'
);

CREATE TABLE sex_enums (

    id SERIAL PRIMARY KEY,
    sex sex

);

ALTER TABLE animals ADD FOREIGN KEY (sex_id) REFERENCES sex_enums(id);


CREATE TYPE application_status AS ENUM (

    'PENDING',
    'ACCEPTED',
    'REJECTED'


);

CREATE TABLE application_types (

    id SERIAL PRIMARY KEY,
    application_status application_status


);

ALTER TABLE applications ADD FOREIGN KEY (application_type_id) REFERENCES application_types(id);


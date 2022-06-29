import React from 'react'
import AnimalCardItem from './AnimalCardItem'
import { Grid, TableContainer } from '@mui/material'
import { useEffect, useState } from 'react'

const AnimalCards = () => {
 
  const animalArray = [
    {name: "a"},
    {name: "b"},
    {name: "c"},
    {name: "d"},
    {name: "e"},
  ]

  const[cards, setCards] = useState(animalArray);

  return (
      <Grid container spacing={2} columns={3}>
          {cards && cards.map(card => <Grid item>
            <AnimalCardItem src={process.env.PUBLIC_URL + '/familydog.jpeg'}/>
            </Grid>)}
      </Grid>
  )
}

export default AnimalCards
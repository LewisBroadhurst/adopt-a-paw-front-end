import React from 'react'
import AnimalCardItem from './AnimalCardItem'
import { Grid, TableContainer } from '@mui/material'
import { useEffect, useState } from 'react'
import TablePagination from '@mui/material/TablePagination';
import { Box, fontSize } from '@mui/system';
import './AnimalCards.css';
import { getAnimalsFilter } from '../../API';

const AnimalCards = () => {

  const animalArray = [...Array(50).keys()].map((n) => { return { name: "dog" + n, id: n } })

  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimalsFilter(setAnimals);
  }, []);

  // const [cards, setCards] = useState([animals]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function calculateCurrentCards() {
    const result = [];

    for (let i = page * itemsPerPage; i < animals.length && result.length < itemsPerPage; i++) {
      result.push(animals[i]);
    }
    return result;
  }

  return (
    <>
      <div className='gridContainer'>
        <Grid container spacing={2} columns={3} alignItems="center" justifyContent="center">
          {animals && calculateCurrentCards().map(card => <Grid item>
            <AnimalCardItem src={process.env.PUBLIC_URL + '/familydog.jpeg'} animalobj={card}/>
          </Grid>)}
        </Grid>
      </div>
      <Box display="flex" justifyContent="center">
        <TablePagination
          labelRowsPerPage="Items per page"
          component="div"
          count={animals.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={itemsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  )
}

export default AnimalCards
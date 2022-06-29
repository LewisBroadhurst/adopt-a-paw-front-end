import React from 'react'
import AnimalCardItem from './AnimalCardItem'
import { Grid, TableContainer } from '@mui/material'
import { useEffect, useState } from 'react'
import TablePagination from '@mui/material/TablePagination';
import { Box, fontSize } from '@mui/system';
import './AnimalCards.css';

const AnimalCards = () => {

  const animalArray = [...Array(50).keys()].map((n) => { return { name: "dog" + n } })

  const [cards, setCards] = useState(animalArray);
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function calculateCurrentCards() {
    const result = [];

    for (let i = page * itemsPerPage; i < cards.length && result.length < itemsPerPage; i++) {
      result.push(cards[i]);
    }
    return result;
  }

  return (
    <>
      <div className='gridContainer'>
        <Grid container spacing={2} columns={3} alignItems="center" justifyContent="center">
          {cards && calculateCurrentCards().map(card => <Grid item>
            <AnimalCardItem src={process.env.PUBLIC_URL + '/familydog.jpeg'} name={card.name} />
          </Grid>)}
        </Grid>
      </div>
      <Box display="flex" justifyContent="center">
        <TablePagination
          labelRowsPerPage="Items per page"
          component="div"
          count={cards.length}
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
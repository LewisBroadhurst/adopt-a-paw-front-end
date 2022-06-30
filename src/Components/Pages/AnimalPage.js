import React from 'react'
import { useParams } from 'react-router-dom'

function AnimalPage() {

    const params = useParams();


  return (
    <div>{params.id}</div>
  )
}

export default AnimalPage
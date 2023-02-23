import React from 'react'

function CarDetail({name, year, color}) {
  return (<>
    <h1>Name: {name}</h1>
    <p>Year: {year}</p>
    <p>Color: {color}</p>
  </>
  )
}

export default CarDetail
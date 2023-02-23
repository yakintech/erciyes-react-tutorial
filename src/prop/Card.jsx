import React from 'react'
import PropTypes from 'prop-types';



function Card(props) {
  return (<>
    <div style={{backgroundColor:props.bGcolor, color:props.textColor}}>
        <h1>{props.cardName}</h1>
        <h2>{props.detail}</h2>
        <h3>{props.year}</h3>
    </div>
  </>
  )
}

Card.defaultProps = {
    bGcolor:'black',
    cardName: 'Çağatay',
    textColor:'white',
    year:2000
}

Card.propTypes = {
    bGcolor: PropTypes.string,
    cardName: PropTypes.string,
    textColor : PropTypes.string,
    // year: PropTypes.number
}

export default Card
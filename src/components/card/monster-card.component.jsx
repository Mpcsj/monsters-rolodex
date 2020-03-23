import React from 'react'
import './monster-card.styles.css'
export default props=>{
    return(
        <div className='card-container' >
            <img alt='monster' src={`https://robohash.org/${props.id}?set=set2&size=180x180`}/>
            <h2 key={props.id}>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}
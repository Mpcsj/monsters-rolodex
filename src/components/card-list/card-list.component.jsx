import React from 'react'
import './card-list.styles.css'
import CardList from '../card/monster-card.component'
export default props=>{
    /*
            {
          this.state.monstersList.map(el=><h1 key={el.id}>{el.name}</h1>)
        }*/
    console.log('props recebido: ',props)
    return(
    <div className='card-list'>
        {
            props.list.map(el=><CardList key = {`${el.id}`}{...el}/>)
        }
    </div>
    )
}
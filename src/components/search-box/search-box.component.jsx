import React from 'react'
import './search-box.style.css'
export default props=>{
    /*
    this.setState({searchField:e.target.value})
     */
    return (
        <input type='search' placeholder='Search here...' className='Input-component'
        onChange={e=>props.updateField(e.target.value)}/>
    )
}
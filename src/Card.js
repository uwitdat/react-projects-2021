import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className='Card-container'>
            <div className='Card'>
                <img style={{ height: '15rem' }} alt="bill withers" src={props.image}></img>
                <p>{props.name}</p>
                <p>{props.job}</p>
                <input type="text" onChange={props.handleJobChange} value={props.job} />
                <button className='btn' onClick={props.handleDelete}>DELETE</button>
            </div>
        </div>
    )
}

export default Card
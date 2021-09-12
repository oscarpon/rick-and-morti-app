import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.image} alt="" />
                </div>
                
                <div className="card-back">
                    <h5 className="card-title">{item.name}</h5>
                    <p>Status: {item.status}</p>
                    <p>Especie: {item.species}</p>
                    <p>Gender: {item.gender}</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem

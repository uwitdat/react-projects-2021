import React, { useState } from 'react';
import cards from './cards-data'
import Card from './Card'
import './App.css';


function App() {
  const [cardsData, setCardsData] = useState(cards)


  //DELETE OFF ID
  const handleDelete = (id) => {
    const cardsCopy = [...cardsData]
    const specificCard = cardsCopy.find((card) => card.id === id)
    const idx = cardsCopy.indexOf(specificCard)

    if (idx > -1) {
      cardsCopy.splice(idx, 1)
      setCardsData(cardsCopy)
    } else {
      return cardsCopy
    }
  }

  //EDIT JOB FIELD
  const handleJobChange = (e, id) => {
    const cardsIndex = cards.findIndex((card) => card.id === id)
    const cardsCopy = [...cards]
    cardsCopy[cardsIndex].job = e.target.value
    setCardsData(cardsCopy)
  }

  return (
    <section className='section'>
      {cardsData.length === 0 ?
        <div className='container'>
          <h1>No Cards :(</h1>
        </div>
        :
        null
      }

      {cardsData.map((card) =>
        <Card name={card.name}
          job={card.job}
          image={card.image}
          key={card.id}
          handleDelete={() => handleDelete(card.id)}
          handleJobChange={(e) => handleJobChange(e, card.id)}
        />
      )}


    </section>
  );
}

export default App;

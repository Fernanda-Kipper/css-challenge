import React, { useState } from 'react';
import { faker } from '@faker-js/faker';


const generateCards = (totalCards: number) => {
  let newCards = []
  for (let i = 0; i < totalCards; i++) {
    newCards.push(faker.name.firstName())
  }
  return newCards;
}

function App() {
  const [cards, setCards] = useState(() => {
    return generateCards(8)
  })

  const loadMoreCards = () => {
    const newCards = generateCards(4)
    setCards(cards => [...cards, ...newCards])
  }

  return (
    <div className="wrap">
      <div className="cards-container">
        {cards.map(card => <div className="card">{card}</div>)}
      </div>
      <button onClick={loadMoreCards}>carregar mais cards</button>
    </div>
  );
}

export default App;

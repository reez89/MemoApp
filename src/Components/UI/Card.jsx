import React from 'react'
import card from './Card.module.css'

function Card(props) {
  return (
    <div className={card.card}>
        {/* Una proprieta' speciale, che ci permette di contenuto all'interno, come ng-content di Angular */}
        {props.children}
    </div>
  )
}

export default Card
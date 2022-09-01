import React from "react";

function Card({ card, onClick }) {
  function handleCardClick() {
    onClick(card);
  }

  return (
    <div className="element">
      <button id="delete" type="button" className="element__delete"></button>
      <img
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleCardClick}
      />
      <div className="element__group">
        <h2 className="element__place">{card.name}</h2>
        <div className="element__liked">
          <button id="like" type="button" className="element__like"></button>
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

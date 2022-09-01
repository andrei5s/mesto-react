function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_img  ${card && "popup_opened"}`}>
      <figure className="popup__img-container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
        <img
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
          className="popup__img-card"
        />
        <figcaption className="popup__img-title">
          {card ? card.name : ""}
        </figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;

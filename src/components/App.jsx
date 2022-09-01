import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function onEditAvatar() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function onEditProfile() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function onAddPlace() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard({
      link: card.link,
      name: card.name,
    });
  }

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <div className="body">
      <div className="page">
        <Header />

        <Main
          onEditAvatar={onEditAvatar}
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          onCardClick={handleCardClick}
        ></Main>

        <Footer />

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name={`User`}
          title={`Редактировать профиль`}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__form-input">
            <input
              className="popup__input popup__input-top popup__input-upper"
              id="inputname"
              placeholder="Имя"
              type="text"
              name="name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="error popup__input-error"></span>
            <input
              className="popup__input popup__input-bottom"
              id="inputjob"
              placeholder="Профессия"
              type="text"
              name="job"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="error popup__input-error"></span>
            <button
              aria-label="Сохранить"
              className="popup__button"
              type="submit"
            >
              Сохранить
            </button>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name={`cards`}
          title={`Новое место`}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__form-input">
            <input
              type="text"
              id="inputnamecard"
              name="namecard"
              placeholder="название"
              className="popup__input popup__input-upper"
              minLength="2"
              maxLength="30"
              required
            />
            <span
              id="inputnamecard-error"
              className="error popup__input-error"
            ></span>
            <input
              type="url"
              id="inputcard"
              name="card"
              placeholder="Ссылка на картинку"
              className="popup__input"
              required
            />
            <span
              id="inputcard-error"
              className="error popup__input-error"
            ></span>
            <button
              className="popup__button"
              type="submit"
              aria-label="создать"
            >
              Создать
            </button>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name={`avatar`}
          title={`Обновить аватар`}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__form-input">
            <input
              type="url"
              id="inputavatar"
              name="avatar"
              placeholder="Ссылка на ававтар"
              className="popup__input"
              required
            />
            <span
              id="inputavatar-error"
              className="error popup__input-error"
            ></span>
            <button
              className="popup__button"
              type="submit"
              aria-label="сохранить"
            >
              Сохранить
            </button>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm name={`delete`} title={`Вы уверены?`}>
          <button
            className="popup__button"
            id="button-dell"
            type="submit"
            aria-label="Да"
          >
            Да
          </button>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);   
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  //const [selectedCard, setSelectedCard] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard({
      link: card.link,
      name: card.name,
    });
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
   // setSelectedCard(false);
    setSelectedCard(null);
  };

  return (
    <div className="body">
      <div className="page">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name={`User`}
          title={`Редактировать профиль`}
          onClose={closeAllPopups}
          buttonText='Сохранить'
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
            
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name={`cards`}
          title={`Новое место`}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText='Создать'
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
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name={`avatar`}
          title={`Обновить аватар`}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText='Сохранить'
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
          </fieldset>
        </PopupWithForm>
        <PopupWithForm name={`delete`} title={`Вы уверены?`} buttonText='Да' />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;

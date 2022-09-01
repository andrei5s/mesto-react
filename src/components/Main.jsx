import { api } from "../utils/Api";
import React from "react";
import Card from "./Card";

export default function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserAvatar(user.avatar);
        setUserDescription(user.about);
        setCards(cards);
      })
      .catch((err) => {
        console.log(`${err}, попробуйте ещё`);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <div
            className="profile__avatar-overlay"
            onClick={props.onEditAvatar}
            id="avatar-button"
          ></div>
          <img src={userAvatar} alt="аватарка" className="profile__image" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            id="edit"
            type="button"
            className="profile__edit"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          id="add"
          type="button"
          className="profile__add"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => {
          return (
            <Card card={card} key={card._id} onClick={props.onCardClick} />
          );
        })}
      </section>
    </main>
  );
}

function PopupWithForm({ name, title, isOpen, onClose, children, onSubmit }) {
  return (
    <div className={`popup popup_type_${name}` + (isOpen && " popup_opened")}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={name}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

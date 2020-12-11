import React from "react";
import "./Form.css";

const Form = ({
  onStylesInputChange,
  createBanner,
  copyHtmlToBuffer,
  copyJSONtoBuffer,
  imageUrl,
  text,
  backgroundColor,
}) => {
  return (
    <form className="form">
      <h3 className="form__header">Укажите параметры баннера:</h3>
      <div className="form__input-items">
        <div className="form__input-labels">
          <p className="form__input-label">Цвет заливки:</p>
          <p className="form__input-label">Текст:</p>
          <p className="form__input-label">Иллюстрация:</p>
        </div>
        <div className="form__inputs">
          <input
            name="backgroundColor"
            onChange={onStylesInputChange}
            value={backgroundColor}
            type="text"
            placeholder="Укажите цвет..."
            className="form__input"
          />
          <input
            name="text"
            onChange={onStylesInputChange}
            value={text}
            type="text"
            placeholder="Введите текст..."
            className="form__input"
          />
          <input
            name="imageUrl"
            onChange={onStylesInputChange}
            value={imageUrl}
            type="url"
            placeholder="Cсылка на изображение..."
            className="form__input"
          />
        </div>
      </div>
      <div className="form__buttons">
        <button
          onClick={createBanner}
          className="button form__button form__button-create"
        >
          PNG
        </button>
        <button
          onClick={copyHtmlToBuffer}
          className="button form__button form__button-html"
        >
          HTML
        </button>
        <button
          onClick={copyJSONtoBuffer}
          className="button form__button form__button-json"
        >
          JSON
        </button>
      </div>
    </form>
  );
};

export default Form;

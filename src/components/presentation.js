import React from "react";

const PresentationPictureLeft = ({ title, text, picture }) => (
  <div className={"presentation__item"}>
    <div className={"row"}>
      <div className={"col-6 first"}>
        <div className={"thumbnail"}>
          <img alt={"Bild folgt"} src={picture} />
        </div>
      </div>
      <div className={"col-6"}>
        <div className={"presentation__content"}>
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={`mailto:info@bitlingo.de?subject=Anfrage: ${title}`}>
            <p>Vortrag anfragen</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const PresentationPictureRight = ({ title, text, picture }) => (
  <div className={"presentation__item"}>
    <div className={"row"}>
      <div className={"col-6 first"}>
        <div className={"presentation__content"}>
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={`mailto:info@bitlingo.de?subject=Anfrage: ${title}`}>
            <p>Vortrag anfragen</p>
          </a>
        </div>
      </div>
      <div className={"col-6"}>
        <div className={"thumbnail"}>
          <img alt={"Bild folgt"} src={picture} />
        </div>
      </div>
    </div>
  </div>
);

const Presentation = ({ index, title, text, picture }) => {
  return index % 2 === 0 ? (
    <PresentationPictureLeft title={title} text={text} picture={picture} />
  ) : (
    <PresentationPictureRight title={title} text={text} picture={picture} />
  );
};

export default Presentation;

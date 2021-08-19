import React from "react";
import "./presentation.scss";
import { Badge } from "antd";

const PresentationPictureLeft = ({
  title,
  text,
  picture,
  learningContent,
  level,
}) => (
  <div className={"presentation__item picture-left"}>
    <div className={"row"}>
      <div className={"col-6 first"}>
        <div className={"thumbnail"}>
          <Badge.Ribbon
            placement="start"
            color="#f2a900"
            text={level === 0 ? "Anfänger" : "Fortgeschritten"}
          >
            <img alt={"Bild folgt"} src={picture} />
          </Badge.Ribbon>
        </div>
      </div>
      <div className={"col-6"}>
        <div className={"presentation__content"}>
          <h3>{title}</h3>
          <p>{text}</p>
          <span>
            <strong>Lerninhalte</strong>
          </span>
          <ul>
            {learningContent.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
          <a href={`mailto:info@bitlingo.de?subject=Anfrage: ${title}`}>
            <p>Vortrag anfragen</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const PresentationPictureRight = ({
  title,
  text,
  picture,
  learningContent,
  level,
}) => (
  <div className={"presentation__item picture_right"}>
    <div className={"row"}>
      <div className={"col-6"}>
        <div className={"presentation__content"}>
          <h3>{title}</h3>
          <p>{text}</p>
          <span>
            <strong>Lerninhalte</strong>
          </span>
          <ul>
            {learningContent.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
          <a href={`mailto:info@bitlingo.de?subject=Anfrage: ${title}`}>
            <p>Vortrag anfragen</p>
          </a>
        </div>
      </div>
      <div className={"col-6 first"}>
        <div className={"thumbnail"}>
        <Badge.Ribbon
            placement="end"
            color="#f2a900"
            text={level === 0 ? "Anfänger" : "Fortgeschritten"}
          >
            <img alt={"Bild folgt"} src={picture} />
          </Badge.Ribbon>
        </div>
      </div>
    </div>
  </div>
);

const Presentation = ({ index, data }) => {
  return index % 2 === 0 ? (
    <PresentationPictureLeft
      key={index}
      title={data.title}
      text={data.text}
      picture={data.picture}
      learningContent={data.learningContent}
      level={data.level}
    />
  ) : (
    <PresentationPictureRight
      key={index}
      title={data.title}
      text={data.text}
      picture={data.picture}
      learningContent={data.learningContent}
      level={data.level}
    />
  );
};

export default Presentation;

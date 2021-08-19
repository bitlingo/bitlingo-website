import React from "react";
import "./presentation.scss";
import { Badge } from "antd";

const LearningContent = ({ content }) => (
  <div>
    <span>
      <strong>Lerninhalte</strong>
    </span>
    <ul>
      {content.map((lesson, index) => (
        <li key={index}>{lesson}</li>
      ))}
    </ul>
  </div>
);

const PresentationPictureLeft = ({
  title,
  text,
  picture,
  learningContent,
  level,
  showLearningContent,
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
          {showLearningContent && learningContent ? (
            <LearningContent content={learningContent} />
          ) : null}
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
  showLearningContent,
}) => (
  <div className={"presentation__item picture_right"}>
    <div className={"row"}>
      <div className={"col-6"}>
        <div className={"presentation__content"}>
          <h3>{title}</h3>
          <p>{text}</p>
          {showLearningContent && learningContent ? (
            <LearningContent content={learningContent} />
          ) : null}
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

const Presentation = ({ index, data, showLearningContent }) => {
  return index % 2 === 0 ? (
    <PresentationPictureLeft
      key={index}
      title={data.title}
      text={data.text}
      picture={data.picture}
      learningContent={data.learningContent}
      level={data.level}
      showLearningContent={showLearningContent}
    />
  ) : (
    <PresentationPictureRight
      key={index}
      title={data.title}
      text={data.text}
      picture={data.picture}
      learningContent={data.learningContent}
      level={data.level}
      showLearningContent={showLearningContent}
    />
  );
};

export default Presentation;

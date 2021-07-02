import React from "react"

const PresentationPictureLeft = ({ title, text, picture }) => (
  <div className={"feature__item"}>
    <div className={"row"}>
      <div className={"col-6 first"}>
        <div className={"thumbnail"}>
          <img alt={"Presentaion preview"} src={picture} />
        </div>
      </div>
      <div className={"col-6"}>
        <div className={"feature__content"}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
)

const PresentationPictureRight = ({ title, text, picture }) => (
  <div className={"feature__item"}>
    <div className={"row"}>
      <div className={"col-6 first"}>
        <div className={"feature__content"}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      <div className={"col-6"}>
        <div className={"thumbnail"}>
          <img alt={"Presentaion preview"} src={picture} />
        </div>
      </div>
    </div>
  </div>
)

const Presentation = ({ index, title, text, picture }) => {
  return index % 2 === 0 ? (
    <PresentationPictureLeft title={title} text={text} picture={picture} />
  ) : (
    <PresentationPictureRight title={title} text={text} picture={picture} />
  )
}

export default Presentation

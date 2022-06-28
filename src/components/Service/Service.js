import React from "react";
import "./Service.less";
import { Button } from "antd";
import Contact from "../Contact/Contact";

const ContactPart = ({ serviceTitle }) => {
  const [contactVisible, setContactVisible] = React.useState(false);

  const handleContact = () => {
    setContactVisible(!contactVisible);
  };

  return (
    <div>
      {contactVisible ? (
        <div className="contact-form">
          <Contact serviceTitle={serviceTitle} toogleContact={handleContact} />
          {/* <Button onClick={handleContact}>Kontaktformular schließen</Button> */}
        </div>
      ) : (
        <div className="contact-form">
          <Button type="primary" onClick={handleContact}>
            Unterstützung anfragen
          </Button>
        </div>
      )}
    </div>
  );
};

const ServicePictureLeft = ({ title, text, picture, price }) => (
  <div className={"service__item picture-left"}>
    <div className={"row"}>
      <div className={"col-6 first"}>
        <div className={"thumbnail"}>
          <img alt={"Bild folgt"} src={picture} />
        </div>
      </div>
      <div className={"col-6"}>
        <div className={"service__content"}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
    <ContactPart serviceTitle={title}></ContactPart>
  </div>
);

const ServicePictureRight = ({ title, text, picture, price }) => (
  <div className={"service__item picture_right"}>
    <div className={"row"}>
      <div className={"col-6"}>
        <div className={"service__content"}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
      <div className={"col-6 first"}>
        <div className={"thumbnail"}>
          <img alt={"Bild folgt"} src={picture} />
        </div>
      </div>
    </div>
    <ContactPart serviceTitle={title}></ContactPart>
  </div>
);

const Service = ({ index, data }) => {
  debugger;
  return index % 2 === 0 ? (
    <ServicePictureLeft
      key={index}
      title={data.title}
      text={data.text}
      picture={data.picture}
      price={data.price}
    />
  ) : (
    <ServicePictureRight
      key={index}
      title={data.title}
      text={data.text}
      picture={data.picture}
      price={data.price}
    />
  );
};

export default Service;

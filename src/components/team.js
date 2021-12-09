import React from "react";
import grischa from "../../static/images/team/grischa.jpg";
import cenan from "../../static/images/team/cenan.jpg";
import laurin from "../../static/images/team/laurin.jpg";

const profiles = [
  {
    name: "Grischa",
    profilePicture: grischa,
    title: "CTO",
    textPrimary: "Software Developer",
    textSecondary: "seit 2013 im Kryptomarkt",
  },
  {
    name: "Cenan",
    profilePicture: cenan,
    title: "CEO",
    textPrimary: "Wirtschaftsmathematik B.Sc.",
    textSecondary: "seit 2017 im Kryptomarkt",
  },
  {
    name: "Laurin",
    profilePicture: laurin,
    title: "CCO",
    textPrimary: "Architektur und Städtebau B.Sc.",
    textSecondary: "seit 2017 im Kryptomarkt",
  },
];

const Profile = ({ name, profilePicture, title, primary, secondary }) => (
  <div className="profile">
    <img
      className="profile-picture"
      src={profilePicture}
      title={name}
      alt={name}
    ></img>
    <div className="texts">
      <span className="text name">{name}</span>
      <span className="text title">{title}</span>
      <span className="text primary">{primary}</span>
      <span className="text secondary">{secondary}</span>
    </div>
  </div>
);

const Description = () => (
  <div>
    <strong>
      Wir sind ein junges 3-köpfiges Team mit dem Ziel, möglichst vielen
      Menschen die Welt der Kryptowährungen näher zu bringen:
    </strong>
    <br />
    <br />
    <span>
      <strong>Cenan</strong> befindet sich in den letzten Zügen seines
      Masterstudiums in Wirtschaftsmathematik und beschäftigt sich seit Anfang
      2017 intensiv mit dem Thema Kryptowährungen. Seine Expertise liegt
      insbesondere in der zu Grunde liegenden Kryptographie und der
      finanzwirtschaftlichen Sichtweise auf Kryptowährungen als eine neue
      Anlageklasse.
    </span>
    <br />
    <br />
    <span>
      <strong>Grischa</strong> ist Softwareentwickler in einem stark wachsendem
      Startup. Bereits im Jahr 2013 hat er erste Transaktionen mit Bitcoin
      durchgeführt und ist seither bei verschiedenen Open-Source-Projekten im
      Kryptomarkt aktiv.
    </span>
    <br />
    <br />
    <span>
      <strong>Laurin</strong> studiert Architektur und Städtebau im Master und
      befasst sich mit dem Kryptomarkt seit 2017. Während seines Studiums machte
      er mit verschiedenen Design-Projekten in Karlsruhe, Wien und Lissabon auf
      sich aufmerksam. Seine kreative Ader komplettiert unser 3-köpfiges
      Gründerteam.
    </span>
    <br />
    <br />
    <span>
      Das Thema Kryptowährungen ist in den letzten Jahren immer präsenter
      geworden und dennoch gibt es kaum qualitativ hochwertige
      Informationsquellen im deutschsprachigen Raum. Mit unserer mehrjährigen
      Erfahrung und Expertise am Markt ermöglichen wir deutschsprachigen
      Unternehmen zu einem Vorreiter in der neuen Industrie zu werden. Wir
      bieten ein umfangreiches Vortragsportfolio zu verschiedenen
      Themenbereichen des Kryptomarkts an und bereiten Deine Mitarbeiter:innen
      optimal auf die Zukunft vor.
    </span>
  </div>
);

const Team = () => (
  <div id="team" className="team">
    <h2>Bitlingo Team</h2>
    <div className="members">
      {profiles.map((profile) => (
        <Profile
          key={profile.name}
          name={profile.name}
          profilePicture={profile.profilePicture}
          title={profile.title}
          primary={profile.textPrimary}
          secondary={profile.textSecondary}
        />
      ))}
    </div>
    <Description />
  </div>
);

export default Team;

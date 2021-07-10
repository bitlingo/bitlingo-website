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
    <p>
      Wir sind <strong>Bitlingo</strong> - dein Ansprechpartner für alles rund
      um das Thema Kryptowährungen und Blockchain-Technologie. Wir ermöglichen
      deutschen Unternehmen zu einem Vorreiter in dieser neuen aufblühenden
      Industrie zu werden.
    </p>
    <p>
      Kryptowährungen sind immer noch Neuland für den Großteil der Deutschen.
    </p>
    <span>
      Tiefgreifendes Wissen zu vermitteln. und langjährige Erfahrung im Markt
      Das Thema Kryptowährungen wird immer interessanter, gerade für
      Kleinanleger, die nach alternativen Investments suchen.
    </span>
    <span>
      Problem: Kaum qualitativ hochwertige Informationsquellen. Es gibt zwar
      einige Youtube, Tik Toker usw, die sich als Experten ausgeben, aber die
      Informationen, die man dort erhält, sind zum Großteil sehr chaotisch,
      unstrukturiert, auf Clickbait und Hype ausgelegt und teilweise sogar
      falsch.
    </span>
    <span>
      Lösung: Unser Ansatz ist anders. Wir bieten qualitativ hochwertige
      Vorträge und Weiterbildungen vorrangig für Unternehmen, die sich für das
      Thema interessieren und ihre Mitarbeiter schulen möchten. Wir bieten ein
      Vortragsportfolio, mithilfe dessen sich Unternehmen Stück für Stück an den
      Themen entlanghangeln können, um sich und ihren Mitarbeitern Wissen zu
      Kryptowährungen anzueignen.
    </span>
    <span>
      Alleinstellungsmerkmal: Bisher kein deutsches Unternehmen, das Vorträge in
      dem Bereich anbietet.
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

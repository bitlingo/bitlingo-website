import React from "react"
import grischa from "../../static/images/team/grischa.jpg"
import cenan from "../../static/images/team/cenan.jpg"
import laurin from "../../static/images/team/laurin.jpg"

const profiles = [{
    name: "Grischa",
    profilePicture: grischa,
    title: "CTO",
    textPrimary: "Software Developer",
    textSecondary: "seit 2013 im Kryptomarkt"
}, {
    name: "Cenan",
    profilePicture: cenan,
    title: "CEO",   
    textPrimary: "Wirtschaftsmathematik B.Sc.",
    textSecondary: "seit 2017 im Kryptomarkt"
}, {
    name: "Laurin",
    profilePicture: laurin,
    title: "CCO",
    textPrimary: "Architektur und Städtebau B.Sc.",
    textSecondary: "seit 2017 im Kryptomarkt"
}];

const Profile = ({name, profilePicture, title, primary, secondary}) => (
    <div className="profile">
        <img className="profile-picture" src={profilePicture} title="Grischa"></img>
        <div className="texts">
            <span className="text name">{name}</span>
            <span className="text title">{title}</span>
            <span className="text primary">{primary}</span>
            <span className="text secondary">{secondary}</span>
        </div>
    </div>
)

const Team = () => (
    <div className="team">
        <h2>Bitlingo Team</h2>
        <div className="members">
        {profiles.map((profile) => <Profile name={profile.name} 
                                            profilePicture={profile.profilePicture}
                                            title={profile.title}
                                            primary={profile.textPrimary}
                                            secondary={profile.textSecondary} />)}
        </div>
    </div>
)

export default Team;
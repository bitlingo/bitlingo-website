import React from "react";
import Presentation from "./presentation";

const Presentations = ({ data, showHr }) => (
  <div>
    <div className="presentations">
      <h2>Bitlingo Vorträge</h2>
    </div>
    {data.map((presentation, index) => (
      <div>
        <Presentation
          key={index}
          index={index}
          title={presentation.title}
          text={presentation.text}
          picture={presentation.picture}
        />
        {index < data.length - 1 ? (
          <hr
            style={
              showHr ? { visibility: "visible" } : { visibility: "hidden" }
            }
          />
        ) : null}
      </div>
    ))}
  </div>
);

export default Presentations;

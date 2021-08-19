import React from "react";
import Presentation from "./presentation/presentation";

const Presentations = ({ data, showHr, showLearningContent }) => (
  <div>
    <div className="presentations">
      <h2>Bitlingo Vorträge</h2>
    </div>
    {data.map((presentation, index) => (
      <div>
        <Presentation
          key={index}
          index={index}
          data={presentation}
          showLearningContent={showLearningContent}
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

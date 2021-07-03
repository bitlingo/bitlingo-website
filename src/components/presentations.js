import React from "react"
import Presentation from "./presentation"

const Presentations = ({data}) => (
    <div>
        <div className="presentations">
            <h2>Bitlingo Vorträge</h2>
        </div>
        {data.map((presentation, index) => <Presentation key={index} index={index} title={presentation.title} text={presentation.text} picture={presentation.picture} />)  }
    </div>
)

export default Presentations;
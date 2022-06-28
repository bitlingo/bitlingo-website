import React from "react";
import Service from "./Service/Service";

const ServiceGroup = ({ data, showHr }) => (
  <div>
    <div className="services">
      <h2>Bitlingo Dienstleistungen</h2>
    </div>
    {data.map((service, index) => (
      <div key={index}>
        <Service
          key={index}
          index={index}
          data={service}
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

export default ServiceGroup;

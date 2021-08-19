import React, { useState, useEffect } from "react";
import { Slider } from "antd";
import "./pricing.scss";

const sliderProps = {
  defaultListeners: 10,
  defaultHours: 2,
  minListeners: 1,
  minHours: 1,
  maxListeners: 100,
  maxHours: 8,
};

const handleListenerSliderTooltip = (value) => {
  if (value === 1) {
    return `${value} Teilnehmer:in`;
  } else {
    return `${value} Teilnehmer:innen`;
  }
};

const handleHoursSliderTooltip = (value) => {
  if (value === 1) {
    return `${value} Stunde`;
  } else {
    return `${value} Stunden`;
  }
};

const calculatePrice = (listeners, hours) => {
  return -1 + 40 * listeners + 300 * hours;
};

const Pricing = () => {
  const [listeners, setListeners] = useState(sliderProps.defaultListeners);
  const [hours, setHours] = useState(sliderProps.defaultHours);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const price = calculatePrice(listeners, hours);
    setPrice(price);
  }, [listeners, hours]);

  return (
    <div className="pricing-container">
      <h2>Preise</h2>
      <div className="description">
      <span >
        Die Kosten unserer Vorträge richten sich nach der jeweiligen Anzahl der
        Teilnehmer und der Dauer des Vortrags. Wir empfehlen Neueinsteigern
        unseren 60-minütigen Einführungsvortrag “Genesis-Vortrag
        Kryptowährungen”, der ein grundlegendes Blockchain-Wissen vermittelt.
      </span>
      </div>
      
      <div className="pricing-sliders">
        <Slider
          className="slider"
          defaultValue={sliderProps.defaultListeners}
          min={sliderProps.minListeners}
          max={sliderProps.maxListeners}
          tooltipVisible
          tipFormatter={handleListenerSliderTooltip}
          onChange={setListeners}
        ></Slider>
        <Slider
          className="slider"
          defaultValue={sliderProps.defaultHours}
          min={sliderProps.minHours}
          max={sliderProps.maxHours}
          step={0.5}
          tooltipVisible
          tipFormatter={handleHoursSliderTooltip}
          onChange={setHours}
        ></Slider>
      </div>
      <span className="price">{`${price} € (inkl. MwSt.)`}</span>
      <a
        href={`mailto:info@bitlingo.de?subject=Anfrage eines ${hours} Stunden Vortrags für ${listeners} Teilnehmer`}
        className="button"
      >
        Vortrag anfragen
      </a>
    </div>
  );
};

export default Pricing;

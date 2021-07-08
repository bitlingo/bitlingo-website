import React, { useState, useEffect } from "react";
import { Slider } from "antd";

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
      <div className="pricing-sliders">
        <Slider
          defaultValue={sliderProps.defaultListeners}
          min={sliderProps.minListeners}
          max={sliderProps.maxListeners}
          tooltipVisible
          tipFormatter={(value) => `${value} Teilnehmer:innen`}
          onChange={setListeners}
        ></Slider>
        <Slider
          defaultValue={sliderProps.defaultHours}
          min={sliderProps.minHours}
          max={sliderProps.maxHours}
          step={0.5}
          tooltipVisible
          tipFormatter={handleListenerSliderTooltip}
          onChange={setHours}
        ></Slider>
      </div>
      <span className="price">{`Preis: ${price} € inkl. MwSt.`}</span>
    </div>
  );
};

export default Pricing;

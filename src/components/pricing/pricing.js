import React, { useState, useEffect } from "react";
import { Button, Slider } from "antd";
import "./pricing.less";
import { Link } from "gatsby";

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
  return (
    149 + 50 * (listeners - 1) + Math.min(100 * listeners, 200) * (hours - 1)
  );
  //return -1 + 40 * listeners + 300 * hours;
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
    <div className="pricing-and-button-container">
    <div className="pricing-container">
      <h2>Preise</h2>
      <div className="description">
        <span>
          Die Kosten unserer Vorträge richten sich nach der Anzahl der
          Teilnehmer:innen und der Dauer des Vortrags. Die Vorträge haben eine
          Gesamtdauer von jeweils 60-120 Minuten (inkl. anschließender
          Fragerunde) und finden über Zoom statt.
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
      
    </div>
    <Link to="/contact">
    <Button className="anfragen-btn" type="primary">Vortrag anfragen</Button>
  </Link>
  </div>
  );
};

export default Pricing;

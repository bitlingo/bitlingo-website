import React from "react"
import { Slider } from "antd"

const sliderProps = {
  defaultListeners: 10,
  defaultHours: 1,
  minListeners: 1,
  minHours: 0.5,
  maxListeners: 100,
  maxHours: 8,
}

const handleListenerSliderTooltip = (value) => {
  if (value === 1) {
    return `${value} Stunde`
  } else {
    return `${value} Stunden`
  }
}

const Pricing = () => (
  <div className="pricing-container">
    <h2>Preise</h2>
    <div className="pricing-sliders">
      <Slider
        defaultValue={sliderProps.defaultListeners}
        min={sliderProps.minListeners}
        max={sliderProps.maxListeners}
        tooltipVisible
        tipFormatter={(value) => `${value} Teilnehmer`}
      ></Slider>
      <Slider
        defaultValue={sliderProps.defaultHours}
        min={sliderProps.minHours}
        max={sliderProps.maxHours}
        step={0.5}
        tooltipVisible
        tipFormatter={handleListenerSliderTooltip}
      ></Slider>
    </div>
  </div>
)

export default Pricing

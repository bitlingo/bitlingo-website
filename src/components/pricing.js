import React from "react"
import { Slider } from "antd"

const prices = {
    defaultListeners: 10,
    defaultHours: 1
}

const Pricing = () => (
    <div className="pricing">
        <h2>Preise</h2>
        <Slider defaultValue={prices.defaultListeners} tooltipVisible></Slider>
        <Slider defaultValue={prices.defaultHours} tooltipVisible></Slider>
    </div>
)

export default Pricing

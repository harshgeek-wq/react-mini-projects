import React, { useState } from "react"
import "./index.css"

const BulbFunction = () => {
  const [isOn, setIsOn] = useState(false)

  const bulbImage = isOn
    ? "https://res.cloudinary.com/saiuttej/image/upload/v1702272077/Insta%20Share%20Project%20Assets/Bulb_On_Img_e2bsw6.png"
    : "https://res.cloudinary.com/saiuttej/image/upload/v1702272077/Insta%20Share%20Project%20Assets/Bulb_Off_Img_agvxdi.png"

  return (
    <div className="bulb-container">
      <img
        src={bulbImage}
        alt="bulb"
        className={`bulb-image ${isOn ? "glow" : ""}`}
      />
      <div className="button-container">
        <button className="on-btn" onClick={() => setIsOn(true)}>
          On
        </button>
        <button className="off-btn" onClick={() => setIsOn(false)}>
          Off
        </button>
      </div>
    </div>
  )
}

export default BulbFunction

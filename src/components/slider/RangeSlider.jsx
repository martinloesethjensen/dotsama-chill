import React from "react";
import ReactSlider from "react-slider";
import "../slider/RangeSlider.css";

export const RangeSlider = () => {

    return <div style={{width: "100px"}}>
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="left-thumb"
            trackClassName="track"
            renderMark={(props) => <p {...props}>Hi</p>}
            defaultValue={[0, 100]}
            renderThumb={(props, state) => <div {...props}>xxx</div>}
            renderTrack={(props) => <div {...props} style={{color: "#E6007A", width: "100px"}}><p>j </p></div>}
            pearling
            minDistance={10}
        />
    </div>


}

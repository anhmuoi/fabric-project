import React, { useEffect, useState } from 'react';
import Slider from 'react-rangeslider';
import * as canvasUtils from '../../../utils/CanvasUtils.jsx';

const OpacitySlider = () => {
    const [opacity, setOpacity] = useState(10);
    useEffect(() => {
        canvasUtils.changeOpacity(opacity / 10);
    }, [opacity]);

    const onSliderChange = (value) => {
        console.log(value);
        setOpacity(value);
    };

    return (
        <div className="one-rem-mb">
            <label htmlFor="objectName" className="label is-small">
                OPACITY
            </label>
            <Slider min={0} max={10} step={1} value={opacity} onChange={(value) => onSliderChange(value)} />
        </div>
    );
};

export default OpacitySlider;

import React from 'react';
import ColorPicker from './ColorPicker';
import OpacitySlider from './OpacitySlider';
import TagColor from './TagColor/index.jsx';
import TransformObjects from './TransformObjects';

const ObjectControlsContainer = () => {
    return (
        <div className="object-controls-container">
            <ColorPicker />
            <OpacitySlider />
            <TransformObjects />
            <TagColor />
        </div>
    );
};
export default ObjectControlsContainer;

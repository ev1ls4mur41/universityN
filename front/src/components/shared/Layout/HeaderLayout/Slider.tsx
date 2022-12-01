import React from 'react';
import HeaderStyle from './style.module.sass';

function SliderLayout() {
    return (
        <div>
            <label className={HeaderStyle.switch}>
                <input type={"checkbox"} />
                <span className={HeaderStyle.sliderRound}></span>
            </label>
        </div>
    );
}

export default SliderLayout;
import React from 'react';

import HeaderStyle from './style.module.sass';

function SliderLayout() {
    return (
        <div className={HeaderStyle.Slider}>
            <img
                src="/images/svg/LightLogoActive.svg"
                alt="Light"
                className={HeaderStyle.lightThemeLogo}
            />
            <label className={HeaderStyle.switch}>
                <input type="checkbox" />
                <span className={HeaderStyle.sliderRound} />
            </label>
            <img
                src="/images/svg/DarkLogoDisable.svg"
                alt="Dark"
                className={HeaderStyle.darkThemeLogo}
            />
        </div>
    );
}

export default SliderLayout;

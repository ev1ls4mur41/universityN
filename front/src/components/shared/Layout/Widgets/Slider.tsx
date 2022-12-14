import Image from 'next/image';
import React from 'react';

import HeaderStyle from '../Header/style.module.sass';

function SliderLayout() {
    return (
        <div className={HeaderStyle.Slider}>
            <Image
                src="/images/svg/LightLogoActive.svg"
                alt="Light"
                width={27}
                height={27}
                className={HeaderStyle.lightThemeLogo}
            />
            <label className={HeaderStyle.switch}>
                <input type="checkbox" />
                <span className={HeaderStyle.sliderRound} />
            </label>
            <Image
                src="/images/svg/DarkLogoDisable.svg"
                alt="Dark"
                width={24}
                height={24}
                className={HeaderStyle.darkThemeLogo}
            />
        </div>
    );
}

export default SliderLayout;

import 'moment/locale/ru';

import React from 'react';

import DateLayout from '@/components/shared/Layout/Header/Date';
import SliderLayout from '@/components/shared/Layout/Header/Slider';
import ClockWidget from '@/components/shared/Layout/Header/Watch';

import HeaderStyle from './style.module.sass';

function Header() {
    return (
        <div className={HeaderStyle.container}>
            <picture>
                <img src="/images/svg/logo.svg" alt="Университет N" className={HeaderStyle.logo} />
            </picture>
            <div className={HeaderStyle.FullDate}>
                <div className={HeaderStyle.Clock}>
                    <ClockWidget />
                </div>
                <div className={HeaderStyle.Border}>
                    <span />
                </div>
                <div className={HeaderStyle.Date}>
                    <DateLayout />
                </div>
                <SliderLayout />
            </div>
        </div>
    );
}

export default Header;

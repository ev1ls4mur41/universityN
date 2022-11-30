import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import HeaderStyle from './style.module.sass';
import DateLayout from "@/components/shared/Layout/HeaderLayout/Date";
import ClockWidget from "@/components/shared/Layout/HeaderLayout/Watch";
import SliderLayout from "@/components/shared/Layout/HeaderLayout/Slider";


function HeaderLayout() {
    return (
        <div className={HeaderStyle.container}>
            <img src="/images/svg/logo.svg" alt="Университет N" className={HeaderStyle.logo}/>
            <div className={HeaderStyle.FullDate}>
                <div className={HeaderStyle.Clock}>
                <ClockWidget />
                </div>
                <div className={HeaderStyle.Border}>
                    <span></span>
                </div>
                <div className={HeaderStyle.Date}>
                    <DateLayout />
                </div>
            </div>

        </div>
    );
}

export default HeaderLayout;
import 'moment/locale/ru';

import Image from 'next/image';
import React from 'react';

import DateLayout from '@/components/shared/Layout/Widgets/Date';
import SliderLayout from '@/components/shared/Layout/Widgets/Slider';
import ClockWidget from '@/components/shared/Layout/Widgets/Watch';

import HeaderStyle from './style.module.sass';

function Header() {
    return (
        <header className={HeaderStyle.header}>
            <Image src="/images/svg/logo.svg" alt="Университет N" width={193} height={40} />
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
        </header>
    );
}

export default Header;

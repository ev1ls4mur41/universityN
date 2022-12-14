import 'moment/locale/ru';

import moment from 'moment';
import React from 'react';

import HeaderStyle from '../Header/style.module.sass';

function DateLayout() {
    const DateOfYear = moment().format('L');
    const DateOfWeak = moment().format('dddd');
    return (
        <div className={HeaderStyle.DayNDate}>
            <p className={HeaderStyle.dateYear}>{DateOfYear}</p>
            <p className={HeaderStyle.dateWeak}>{DateOfWeak}</p>
        </div>
    );
}

export default DateLayout;

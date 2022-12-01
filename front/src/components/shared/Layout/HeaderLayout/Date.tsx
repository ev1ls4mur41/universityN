import moment from 'moment';
import 'moment/locale/ru';

import HeaderStyle from './style.module.sass';


function DateLayout() {
    const DateOfWeak = moment().format('dddd');
    const DateOfYear = moment().subtract(10, 'days').calendar();
    return(
        <div>
            <p className={HeaderStyle.dateYear}>{DateOfYear}</p>
            <p className={HeaderStyle.dateWeak}>{DateOfWeak}</p>
        </div>
    );
}

export default DateLayout;
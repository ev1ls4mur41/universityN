import React from 'react';

import FooterStyle from './style.module.sass';

function Footer() {
    return (
        <div className={FooterStyle.container}>
            <div className={FooterStyle.innerCont}>
                <figure className={FooterStyle.infoBlock}>
                    <p className={FooterStyle.infoTitle}>Отдел помощи студентам</p>
                    <a href="tel:+78632381566" className={FooterStyle.infoNum}>
                        +7 (863) 238-15-66
                    </a>
                    <a href="mailto:center-prof-abitur@donstsu.ru" className={FooterStyle.infoMail}>
                        center-prof-abitur@donstsu.ru
                    </a>
                </figure>
                <figure className={FooterStyle.infoBlock}>
                    <p className={FooterStyle.infoTitle}>Заказ справки</p>
                    <a href="tel:+78632381566" className={FooterStyle.infoNum}>
                        +7 (863) 238-15-66
                    </a>
                    <a href="mailto:center-prof-abitur@donstsu.ru" className={FooterStyle.infoMail}>
                        spravki@donstsu.ru
                    </a>
                </figure>
                <figure className={FooterStyle.infoBlock}>
                    <p className={FooterStyle.infoTitle}>Секретариат</p>
                    <a href="tel:+78632381566" className={FooterStyle.infoNum}>
                        +7 (863) 238-15-66
                    </a>
                    <a href="mailto:center-prof-abitur@donstsu.ru" className={FooterStyle.infoMail}>
                        center-prof-abitur@donstsu.ru
                    </a>
                </figure>
            </div>
        </div>
    );
}

export default Footer;

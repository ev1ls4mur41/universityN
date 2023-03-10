import React from 'react';

import FooterStyle from './style.module.sass';

function Footer() {
    return (
        <footer className={FooterStyle.footer}>
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
                <figure className={FooterStyle.infoBlock}>
                    <p className={FooterStyle.infoTitle}>
                        г. Ростов-на-Дону, ул. Абрикосовая, 105/42
                    </p>
                    <p className={FooterStyle.infoTitle}>© Университет N</p>
                </figure>
            </div>
        </footer>
    );
}

export default Footer;

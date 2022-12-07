import Image from 'next/image';
import React from 'react';

import SidebarStyle from './style.module.sass';

function Sidebar() {
    return (
        <div className={SidebarStyle.container}>
            <div className={SidebarStyle.pages}>
                <a href="#" className={SidebarStyle.links}>
                    <p className={SidebarStyle.linksItem}>Расписание</p>
                </a>
                <a href="#" className={SidebarStyle.links}>
                    <p className={SidebarStyle.linksItem}>Учебные материалы</p>
                </a>
                <a href="#" className={SidebarStyle.links}>
                    <p className={SidebarStyle.linksItem}>Мои проекты</p>
                </a>
                <a href="#" className={SidebarStyle.links}>
                    <p className={SidebarStyle.linksItem}>
                        <span className={SidebarStyle.linksItemActive}>Контакты</span>
                    </p>
                </a>
                <a href="#" className={SidebarStyle.links}>
                    <p className={SidebarStyle.linksItem}>Профиль</p>
                </a>
            </div>
            <div className={SidebarStyle.profileInfo}>
                <Image src="/images/svg/Avatar.svg" alt="You" width={40} height={40} />
                <p className={SidebarStyle.name}>Иннокентий Н.</p>
                <p className={SidebarStyle.studInfo}>
                    № зачетной книжки <span className={SidebarStyle.studNum}>ЗА-ДОСХ56-23</span>
                </p>
                <p className={SidebarStyle.logOutBtn}>Выйти</p>
            </div>
        </div>
    );
}

export default Sidebar;

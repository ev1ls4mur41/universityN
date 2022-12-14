import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import SidebarStyle from './style.module.sass';

function Sidebar() {
    return (
        <aside className={SidebarStyle.sidebar}>
            <div className={SidebarStyle.pages}>
                <li className={SidebarStyle.links}>
                    <Link href="/schedule">Расписание</Link>
                </li>
                <li className={SidebarStyle.links}>
                    <Link href="/educationMaterials">Учебные материалы</Link>
                </li>
                <li className={SidebarStyle.links}>
                    <Link href="/myProjects">Мои проекты</Link>
                </li>
                <li className={SidebarStyle.links}>
                    <Link href="/contacts">Контакты</Link>
                </li>
                <li className={SidebarStyle.links}>
                    <Link href="/profile">Профиль</Link>
                </li>
            </div>
            <div className={SidebarStyle.profileInfo}>
                <Image src="/images/svg/Avatar.svg" alt="You" width={40} height={40} />
                <p className={SidebarStyle.name}>Иннокентий Н.</p>
                <p className={SidebarStyle.studInfo}>
                    № зачетной книжки <span className={SidebarStyle.studNum}>ЗА-ДОСХ56-23</span>
                </p>
                <button className={SidebarStyle.logOutBtn}>Выйти</button>
            </div>
        </aside>
    );
}

export default Sidebar;

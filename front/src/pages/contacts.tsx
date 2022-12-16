import Image from 'next/image';
import React from 'react';
import ContactStyle from 'src/assets/PageStyle/contactstyles.module.sass';

import FullLayout from '@/components/shared/Layout/FullLayout';

function contactsPage() {
    return (
        <div>
            <FullLayout>
                <h1>Контакты</h1>
                <figure className={ContactStyle.pageLinkEl}>
                    <p className={ContactStyle.pageLink}>Преподователи</p>
                    <p className={ContactStyle.pageLink}>Студенты</p>
                    <p className={ContactStyle.pageLink}>Администрация</p>
                </figure>
                <table>
                    <tr>
                        <th className={ContactStyle.tableHead}>Имя</th>
                        <th className={ContactStyle.tableHead}>Предмет</th>
                        <th className={ContactStyle.tableHead}>Телефон</th>
                        <th className={ContactStyle.tableHead}>E-mail</th>
                    </tr>
                    <tr className={ContactStyle.studentCard}>
                        <Image
                            src="/images/svg/Avatar.svg"
                            width={60}
                            height={60}
                            alt="Avatar Pic"
                        />
                        <figure className={ContactStyle.memberName}>
                            <p className={ContactStyle.nameStud}>Карасеева Анна Артемовна</p>
                            <p className={ContactStyle.groupStud}>Профессор</p>
                        </figure>
                        <figure className={ContactStyle.memberSubj}>
                            <p className={ContactStyle.subject}>
                                Оформление проектной документации
                            </p>
                        </figure>
                    </tr>
                </table>
            </FullLayout>
        </div>
    );
}

export default contactsPage;

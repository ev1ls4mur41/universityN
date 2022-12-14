import React from 'react';
import ContactStyle from 'src/assets/PageStyle/contactstyles.module.sass';

import FullLayout from '@/components/shared/Layout/FullLayout';

function contactsPage() {
    return (
        <div className={ContactStyle.container}>
            <FullLayout>
                <h1>Контакты</h1>
                <table>
                    <tr>
                        <th>Имя</th>
                        <th>Предмет</th>
                        <th>Имя</th>
                    </tr>
                </table>
            </FullLayout>
        </div>
    );
}

export default contactsPage;

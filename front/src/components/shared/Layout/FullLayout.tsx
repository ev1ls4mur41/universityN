import React from 'react';

import Footer from '@/components/shared/Layout/Footer/footer';
import Header from '@/components/shared/Layout/Header/header';
import Sidebar from '@/components/shared/Layout/Sidebar/sidebar';

type PageProps = {
    children: React.ReactNode;
};

function FullLayout({ children }: PageProps) {
    return (
        <div className="pageWrapper">
            <div className="mainHeader">
                <Header />
            </div>
            <div className="mainAside">
                <Sidebar />
            </div>
            <div className="mainContent">
                {children}
                <div className="mainFooter">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default FullLayout;

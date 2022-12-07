import React from 'react';

import Footer from '@/components/shared/Layout/Footer';
import Header from '@/components/shared/Layout/Header';
import Sidebar from '@/components/shared/Layout/Sidebar/sidebar';

function FullLayout() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default FullLayout;

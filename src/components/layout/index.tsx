import React from 'react';
import HeaderNavigation from "src/components/layout/headerNavigation";
import HeaderSticky from "src/components/layout/headerSticky";

const Layout = ({children}: {children: React.ReactNode }) => {
    return (
        <div className={'w-full flex-col justify_center'}>
            <HeaderSticky />
            <HeaderNavigation />
            <main className = {'body_background'}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
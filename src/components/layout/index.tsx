'use client'
import React from 'react';
import HeaderNavigation from "src/components/layout/headerNavigation";
import HeaderSticky from "src/components/layout/headerSticky";
import {useMediaQuery} from "react-responsive";
import CartContextProvider from "src/context/cartContext/CartContextProvider";

const Layout = ({children}: { children: React.ReactNode }) => {

    const isTabletOrMobile = useMediaQuery({query: '(max-width: 769px)'})

    return (
        <div className={'w-full flex-col justify_center'}>
            <CartContextProvider>
                <HeaderSticky/>
                {!isTabletOrMobile && (
                    <HeaderNavigation/>
                )}
                <main className={'body_background'}>
                    {children}
                </main>
            </CartContextProvider>

        </div>
    );
};

export default Layout;
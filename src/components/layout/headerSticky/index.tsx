'use client'
import React, {useState} from 'react';
import Image from "next/image";
import logo from 'src/assets/logo.svg'
import cartImage from 'src/assets/images/cart.svg'
import profile from 'src/assets/images/profile.svg'
import bell from 'src/assets/images/bell.svg'
import arrow from 'src/assets/images/arrow.svg'
import flagGeo from 'src/assets/images/flags/geo.svg'
import burger from 'src/assets/images/burger.png'
import s from './index.module.scss'
import HeaderNavigation from "src/components/layout/headerNavigation";
import {useCart} from "src/context/cartContext/CartContextProvider";

const HeaderSticky = () => {
    const [isOpenBurger, setOpenBurger] = useState(false)

    const { cart } = useCart()


    return (
        <>
            <div className={s.header}>
                <div className={['container', s.wrap].join(' ')}>
                    <div className={s.burger} onClick={() => setOpenBurger(!isOpenBurger)}>
                        <Image src={burger} alt={'#'} width={20} height={16}/>
                    </div>
                    <div className={s.logo}>
                        <Image src={logo} alt={'#'}/>
                    </div>
                    <div className={'flex justify_between items_center'} style={{gap: 10}}>
                        <div className={s.icon_card}>
                            <Image src={bell} alt={'#'}/>
                        </div>
                        <div className={s.icon_card}>
                            <Image src={cartImage} alt={'#'}/>
                            {cart.length > 0 ? (
                                <div className={s.cart_items}>{cart.length}</div>
                            ) : null}
                        </div>
                        <div className={[s.icon_card, s.profile].join(' ')}>
                            <Image src={profile} alt={'#'}/>
                            <span className={s.profile_name}>Vladimer Dolidze</span>
                            <span>
                            <Image src={arrow} alt="#"/>
                        </span>
                        </div>
                        <div className={`${s.icon_card} ${s.multiLang}`}>
                            <Image src={flagGeo} alt={'#'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${s.backdrop} ${isOpenBurger ? s.active : ''}`} onClick={() => setOpenBurger(false)}>
                <div className={`${s.burger_menu} ${isOpenBurger ? s.active : ''}`}>
                    <HeaderNavigation/>
                </div>
            </div>
        </>

    );
};


export default HeaderSticky;
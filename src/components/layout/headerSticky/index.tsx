import React from 'react';
import Image from "next/image";
import logo from 'src/assets/logo.svg'
import cart from 'src/assets/images/cart.svg'
import profile from 'src/assets/images/profile.svg'
import bell from 'src/assets/images/bell.svg'
import arrow from 'src/assets/images/arrow.svg'
import flagGeo from 'src/assets/images/flags/geo.svg'

import s from './index.module.scss'
const HeaderSticky = () => {
    return (
        <div className = {s.header}>
            <div className = {['container',s.wrap].join(' ')}>
                <div className={s.logo}>
                    <Image src={logo} alt={'#'}/>
                </div>
                <div className = {'flex justify_between items_center'} style = {{gap:10}}>
                    <div className = {s.icon_card}>
                        <Image src = {bell} alt={'#'}/>
                    </div>
                    <div className = {s.icon_card}>
                        <Image src = {cart} alt={'#'}/>
                    </div>
                    <div className = {[s.icon_card,s.profile].join(' ')}>
                        <Image src = {profile} alt={'#'}/>
                        <span className={s.profile_name}>Vladimer Dolidze</span>
                        <span>
                            <Image src={arrow} alt="#"/>
                        </span>
                    </div>
                    <div className = {s.icon_card}>
                        <Image src = {flagGeo} alt={'#'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HeaderSticky;
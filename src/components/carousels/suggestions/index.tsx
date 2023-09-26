import React from 'react';
import suggestion from '../../../../src/assets/images/suggestions/buyEndSell.png'
import Image from "next/image";
import s from './index.module.scss'
const Suggestions = () => {
    return (
        <div className = {'w-full flex justify_center items-center'}>
            <div className={s.wrapper} >
                <div className={s.text}>
                    გაყიდე და იყიდე დომენი მარტივად
                </div>
            </div>
        </div>
    );
};

export default Suggestions;
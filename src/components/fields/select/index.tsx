'use client'
import React from 'react';
import s from './index.module.scss'
import dropdown from 'src/assets/images/doprdown.png'
import Image from "next/image";
interface ISelect {
    title:string,
    onClick?:() => void
}
const Select = ({title,onClick}:ISelect) => {
    return (
        <div className = {s.wrapper}
           onClick = {onClick}
        >
            <div className={s.title}>
                {title}
            </div>
            <div>
                <Image src={dropdown} alt="#"/>
            </div>

        </div>
    );
};

export default Select;
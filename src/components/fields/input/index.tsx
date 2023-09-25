'use client'
import React, {FC, InputHTMLAttributes} from 'react';
import {input} from "zod";
import s from './index.module.scss'
import Image from "next/image";
import close from 'src/assets/images/close.svg'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    withClear?: boolean,
    handleClear?:()=>void,
    withNote?:boolean,
    wrapperClassName?:string,
}

const Input: FC<IInput> = ({withClear,wrapperClassName,handleClear,withNote,value, ...props}) => {



    return (
        <div className={`${s.wrapper} ${wrapperClassName}`}>
            <input
                className={`${s.input}`}
                value = {value}
                {...props}
            />
            {withClear && value && (
                <Image src={close} alt={'#'} className={s.close} onClick = {handleClear}/>
            )}
            {withNote && value && (
                <div className={s.close}>
                    $
                </div>
            )}
        </div>
    );
};

export default Input;
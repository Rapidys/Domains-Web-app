'use client'
import React from 'react';
import s from './index.module.scss'
import btnClose from 'src/assets/images/Btn_Close.png'
import Image from "next/image";
import Filter from "src/components/filter";
import Button from "src/components/buttons";
import {useDomainContext} from "src/context/domainsContext/DomainsContextProvider";
const FilterMobile = ({open,handleClose}:{open:boolean,handleClose:() => void}) => {

    const { getProducts } = useDomainContext()

    return (
        open && (
            <div className={s.wrapper}>
                <div className={s.title}>
                    <div>
                        ფილტრი
                    </div>
                    <Image src={btnClose} alt={'#'} onClick = {handleClose} className={'cursor_pointer'}/>
                </div>
                <div>
                    <Filter onFind/>
                </div>

                <Button onClick={getProducts}>ძიება</Button>
            </div>
        )

    );
};

export default FilterMobile;
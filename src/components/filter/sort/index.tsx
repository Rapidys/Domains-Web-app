'use client'
import React from 'react';
import Link from "next/link";
import s from  './index.module.scss'

const SortTypes = ({handleChangeSortType}:{handleChangeSortType:(type:number) => void}) => {
    return (
        <div className={['flex justify_between items_center w-full', s.header].join(' ')}>
            <div className={'flex'}>
                <div className={s.sort_item_title}>
                    სორტირება:
                </div>
                <ul className={'flex'}>
                    <li className={s.sort_item} onClick={() => handleChangeSortType(1)}>დამატებითი თარიღით</li>
                    <li className={s.sort_item} onClick={() => handleChangeSortType(2)}>ვადის ამოწურვით</li>
                    <li className={s.sort_item} onClick={() => handleChangeSortType(3)}>ფასით</li>
                    <li className={s.sort_item} onClick={() => handleChangeSortType(5)}>ანბანით</li>
                </ul>
            </div>
            <div className={s.sell_domain_wrapper}>
                <Link href={'/'} className={s.sell_domain}>
                    როგორ გავყიდოთ დომენი?
                </Link>
            </div>
        </div>
    );
};

export default SortTypes;
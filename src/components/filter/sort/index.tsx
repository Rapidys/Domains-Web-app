'use client'
import React from 'react';
import Link from "next/link";
import s from  './index.module.scss'

const SortTypes = ({handleChangeSortType,sortTypes}:{handleChangeSortType:(type:number) => void,sortTypes:any[]}) => {
    return (
        <div className={['flex justify_between items_center w-full', s.header].join(' ')}>
            <div className={'flex'}>
                <div className={s.sort_item_title}>
                    სორტირება:
                </div>
                <ul className={'flex'}>
                    {sortTypes.map(item => {
                        return (
                            <li className={s.sort_item} onClick={() => handleChangeSortType(item.id)}>დამატების თარიღით</li>
                        )
                    })}
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
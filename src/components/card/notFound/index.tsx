import React from 'react';
import s from './index.module.scss'
const NotFoundData = () => {
    return (
        <div className = {s.wrapper}>
                <div className={s.text_wrapper}>
                    <div className={s.title}>
                        დომენი ვერ მოიძებნა
                    </div>
                    <div className={s.desc}>
                        მითითებული პარამეტრებით დომენების მარკეტში შედეგები ვერ მოიძებნა, შეცვალეთ ძიების პარამეტრები და ცადეთ თავიდან
                    </div>
                </div>
        </div>
    );
};

export default NotFoundData;
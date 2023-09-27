import React from 'react';
import s from './index.module.scss'
const Suggestions = () => {
    return (
        <div className = {`w-full flex justify_center items-center ${s.container}`}>
            <div className={s.wrapper} >
                <div className={s.text}>
                    გაყიდე და იყიდე დომენი მარტივად
                </div>
            </div>
        </div>
    );
};

export default Suggestions;
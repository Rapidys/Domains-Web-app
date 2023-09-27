import React from 'react';
import s from './index.module.scss'

const Card = ({children,withPadding}:{children:React.ReactNode,withPadding?:boolean}) => {
    return (
        <div className = {`${s.card} ${withPadding ? s.withPadding : ''}`}>
            {children}
        </div>
    );
};

export default Card;
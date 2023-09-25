import React from 'react';
import s from './index.module.scss'

const Card = ({children}:{children:React.ReactNode}) => {
    return (
        <div className = {s.card}>
            {children}
        </div>
    );
};

export default Card;
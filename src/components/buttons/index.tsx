import React, {ButtonHTMLAttributes, FC} from 'react';
import s from './index.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {

}
const Button:FC<IButton> = ({children,...props}) => {
    return (
        <div className={s.wrapper}>
            <button className={s.btn} {...props}>
                {children}
            </button>
        </div>

    );
};

export default Button;
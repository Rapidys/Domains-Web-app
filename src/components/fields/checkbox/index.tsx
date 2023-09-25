import React, {FC, InputHTMLAttributes} from 'react';
import s from './index.module.scss'

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement>{
   label:string,
    id:string
}
const Checkbox:FC<ICheckbox> = ({checked,id, onChange,label,...props}) => {
    return (
        <div className={s.custom_checkbox}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                {...props}
            />
            <label htmlFor={id}></label>
            <span>{label}</span>
        </div>
    );
};

export default Checkbox;
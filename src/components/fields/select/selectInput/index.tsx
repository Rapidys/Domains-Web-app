import React, {FC} from 'react';
import s from '../index.module.scss'
interface ISelect {
    options:any[],
    defaultValue:string,
    onChange:(id:number) => void
}
const SelectInput:FC<ISelect> = ({options,defaultValue,onChange}) => {
    return (
        <select className = {`${s.wrapper}`}
          onChange = {(el) => onChange(+el.target.value)}
        >
            <option value='' >{defaultValue}</option>
            {options?.map((option, index) => {
                return <option value={option.id} key={option.id}
                >
                    {option.displayName}
                </option>

            })}

        </select>
    );
};

export default SelectInput;
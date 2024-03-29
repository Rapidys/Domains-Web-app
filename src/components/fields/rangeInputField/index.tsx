'use client'
import React, {FC} from 'react';
import Input from "src/components/fields/input";
import MultiRangeSlider from "src/components/fields/slider";
import s from './index.module.scss'


interface IRangeInputField {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void,
    onSliderChange: ({min,max}:{min:number,max:number}) => void,
    min: number,
    max: number,
    maxNumber: number,
    title:string,
    onAfterChange?:() => void
}

const RangeInputField: FC<IRangeInputField> = ({ handleChange,onAfterChange, onSliderChange,title, min,maxNumber, max}) => {
    return (
        <div className={'w-full'}>
            <div className={s.section}>
                <div className={s.label}>
                    {title}
                </div>
                <div className={s.input_wrapper}>
                    <Input
                        value={min}
                        name={'priceFrom'}
                        wrapperClassName={s.input}
                        type = {'number'}
                        onChange={(e) => handleChange(e, 'valueFrom')}
                    />
                    <Input
                        value={max}
                        name={'priceTo'}
                        type = {'number'}
                        wrapperClassName={s.input}
                        onChange={(e) => handleChange(e, 'valueTo')}
                    />
                </div>
            </div>
            <MultiRangeSlider
                min={min}
                max={max}
                onChange={onSliderChange}
                maxNumber = {maxNumber}
                onAfterChange = {onAfterChange}
            />
        </div>
    );
};

export default RangeInputField;
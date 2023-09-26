'use client'
import React, {useCallback, useEffect, useState, useRef, FC, useMemo} from "react";
import PropTypes from "prop-types";
import s from './index.module.scss'
import ReactSlider from 'react-slider'
import Tooltip from "src/components/tooltip";

interface IMultiRangeSlider {
    min: number,
    max: number,
    maxNumber: number,
    onChange: ({min, max}: { min: number, max: number }) => void,
    onAfterChange?: () => void,
}


const MultiRangeSlider: FC<IMultiRangeSlider> = ({min = 0, max, maxNumber = 10, onChange,onAfterChange}) => {

    return (
        <div className={s.container}>
            <ReactSlider
                className={s.horizontal_slider}
                trackClassName={s.track}
                max={maxNumber}
                onChange={(values) => onChange({min: values[0], max: values[1]})}
                defaultValue={[+min, +max]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                onAfterChange = {onAfterChange}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => (
                    <Tooltip {...props}  content={state.valueNow} direction={'top'} key = {props.key} ref = {(props.ref as any)} className={s.thumb}>
                            <div className={s.thumb_blur}/>
                            <div className={'w-full flex justify_center items_center'}>
                                <div className={s.verticalLine}></div>
                                <div className={s.verticalLine}></div>
                            </div>
                    </Tooltip>
                )
                }
                pearling
                minDistance={5}
            />
        </div>
    );
};


export default MultiRangeSlider;

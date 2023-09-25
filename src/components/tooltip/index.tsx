'use client'
import React, {FC, Ref, useState} from 'react';
import s from './index.module.scss'

interface ITooltip {
    children:React.ReactNode,
    content:any,
    delay?:number,
    direction?:string,
    className?:string,
    ref:Ref<HTMLInputElement>,
}
const Tooltip:FC<ITooltip> = React.forwardRef(({children,content,delay,direction,className,...props},ref) => {
    let timeout:any;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className={`${s.Tooltip_Wrapper} ${className}`}
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
            {...props}
            ref = {ref}
        >
            {children}
            {active && (
                <div className={`${s.Tooltip_Tip} ${s[(direction as any)] || s.top}`}>
                    {/* Content */}
                    {content}
                </div>
            )}
        </div>
    );
});

export default Tooltip;
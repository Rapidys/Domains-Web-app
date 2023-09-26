import React from 'react';
import {BeatLoader} from "react-spinners";
import s from './index.module.scss'
const Loading = () => {
    return (
        <div className={s.wrapper}>
            <BeatLoader color="#99CC66" style = {{marginTop:30}}/>
        </div>
    );
};

export default Loading;
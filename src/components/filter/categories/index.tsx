import React, {FC} from 'react';
import s from './index.module.scss'
import Checkbox from "src/components/fields/checkbox";

interface category {
    displayName: string,
    id: number,
    checked?: boolean | undefined
}

interface ICategories {
    categories: category[],
    onChange: (id: number) => void,
    title:string
}

const Categories: FC<ICategories> = ({categories, onChange,title}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                {title}
            </div>
            <div>
                {categories.map((item) => {
                    return (
                        <div key={item.id} className={s.item}>
                            <Checkbox id={item.id.toString()} label={item.displayName} checked={item.checked}
                                      onChange={() => onChange(item.id)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Categories;
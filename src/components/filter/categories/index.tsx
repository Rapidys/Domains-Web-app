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
    handleChange: (id: number) => void
}

const Categories: FC<ICategories> = ({categories, handleChange}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                კატეგორიები
            </div>
            <div>
                {categories.map((item) => {
                    return (
                        <div key={item.id} className={s.item}>
                            <Checkbox id={item.id.toString()} label={item.displayName} checked={item.checked}
                                      onChange={() => handleChange(item.id)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Categories;
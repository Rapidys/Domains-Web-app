'use client'
import React, {FC, useEffect, useState} from 'react';
import ProductItem from "src/components/tables/products/productItem";
import Card from "src/components/card";
import Link from "next/link";
import s from './index.module.scss';
import axios, {AxiosResponse} from "axios";
export interface IProductTable {
    id: number,
    price: number,
    domainName: string,
    startDate: string,
    endDate:string
}
export type data = { data? : IProductTable[] }

export const revalidate = 100;
const getData = async (page:number):Promise<AxiosResponse> => {
    return await axios.get<data>(`http://localhost:3000/api/domains?page=${page}`)
}
const ProductTable:FC<data> = ({data}) => {
    const [page,setPage] = useState(1)
    const [products,setProducts] = useState(data)



    useEffect(() => {
        if(page > 1){
            getData(page).then(res => {
                setProducts([...products!,...res.data,])
            })
        }
    },[page])

    if(!data){
        return <div>loading...</div>
    }
    return (
        <>
            <div className={['flex justify_between items_center w-full',s.header].join(' ')}>
                <div className={'flex'}>
                    <div className = {s.sort_item_title}>
                        სორტირება:
                    </div>
                    <ul className={'flex'}>
                        <li className={s.sort_item}>დამატებითი თარიღით</li>
                        <li className={s.sort_item}>ვადის ამოწურვით</li>
                        <li className={s.sort_item}>ფასით</li>
                        <li className={s.sort_item}>ანბანით</li>
                    </ul>
                </div>
             <div className = {s.sell_domain_wrapper}>
                 <Link href={'/'} className={s.sell_domain}>
                     როგორ გავყიდოთ დომენი?
                 </Link>
             </div>
            </div>
            <Card>
                {products?.map((item:IProductTable,index) => {
                    return (
                        <ProductItem
                            title = {item.domainName}
                            price = {item.price}
                            startDate = {item.startDate}
                            endDate = {item.endDate}
                            isLast={index === products.length - 1}
                            newLimit={() => setPage(page + 1)}
                        />
                    )
                })}
            </Card>

        </>
    );
};

export default ProductTable;
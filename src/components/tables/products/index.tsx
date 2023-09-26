'use client'
import React, {FC, useRef, useState} from 'react';
import ProductItem from "src/components/tables/products/productItem";
import Card from "src/components/card";
import Link from "next/link";
import s from './index.module.scss';
import {UseInfiniteScroll} from "src/helpers/hooks/useInfiniteScroll";
import {getDomains} from "src/services/domains";
import {useDomainContext} from "src/context/domainsContext/DomainsContextProvider";
import SortTypes from "src/components/filter/sort";
import NotFoundData from "src/components/card/notFound";
import Loading from "src/components/loading/loading";

export interface IProductTable {
    id: number,
    price: number,
    domainName: string,
    startDate: string,
    endDate: string
}

export type data = { Products?: IProductTable[] }

export const revalidate = 100;

const ProductTable: FC<data> = () => {

    const triggerRef: any = useRef()

    const {products, handleSetProducts, filters, isLast, page, incrementPage, handleChangeSortType} = useDomainContext()

    const {loading} = UseInfiniteScroll({
        apiCall: getDomains,
        ref: triggerRef,
        isLast: isLast,
        page: page,
        incrementPage: incrementPage,
        payload: {
            page: 1,
            priceFrom: filters.price?.valueFrom,
            priceTo: filters.price?.valueTo,
            domainName: filters.name,
            sortType: filters.sortType,
            symbolsFrom: filters.symbols?.valueFrom,
            symbolsTo: filters.symbols?.valueTo,
            categoryIds: filters?.chosenCategories,
            domainZones: filters.chosenDomainZones,
        },
        callBack: (response) => {
            handleSetProducts(response)
        }
    })


    return (
        <>
            <SortTypes handleChangeSortType = { handleChangeSortType }/>

            <Card>
                {!products && (
                    <NotFoundData />
                )}
                {products?.map((item: IProductTable, index) => {
                    return (
                        <ProductItem
                            title={item.domainName}
                            price={item.price}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            id={item.id}
                            key={item.id}
                        />
                    )
                })}
                {loading && <Loading />}
            </Card>
            <div ref={triggerRef} style={{height: '10px'}}></div>

        </>
    );
};

export default ProductTable;
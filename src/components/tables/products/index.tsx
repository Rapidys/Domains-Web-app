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
import Select from "src/components/fields/select";
import Filter from "src/components/filter/filterSmallResolution";
import FilterMobile from "src/components/filter/filterSmallResolution";
import {useMediaQuery} from "react-responsive";
import SelectInput from "src/components/fields/select/selectInput";

export interface IProductTable {
    id: number,
    price: number,
    domainName: string,
    startDate: string,
    endDate: string
}

export type data = { Products?: IProductTable[] }

const sortTypes = [
    {id: 1, displayName: 'დამატების თარიღით'},
    {id: 2, displayName: 'ვადის ამოწურვით'},
    {id: 3, displayName: 'ფასით'},
    {id: 5, displayName: 'ანბანით'},
]

export const revalidate = 100;

const ProductTable: FC<data> = () => {

    const triggerRef: any = useRef()
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 769px)'})

    const {products, handleSetProducts, filters, isLast, page, incrementPage, handleChangeSortType} = useDomainContext()

    const [isOpen, setOpen] = useState(false)


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
            <SortTypes handleChangeSortType={handleChangeSortType} sortTypes={sortTypes}/>

            {isTabletOrMobile && (
                <div className={s.sort_filter}>
                    <Select title={'ფილტრაცია'} onClick={() => setOpen(true)}/>
                    <SelectInput options={sortTypes} defaultValue={'სორტირება'} onChange={handleChangeSortType}/>
                </div>

            )}

            <FilterMobile open={isOpen} handleClose={() => setOpen(false)}/>
            <Card>
                {!products && (
                    <NotFoundData/>
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
                            item = {item}
                        />
                    )
                })}
                {loading && <Loading/>}
            </Card>
            <div ref={triggerRef} style={{height: '10px'}}></div>

        </>
    );
};

export default ProductTable;
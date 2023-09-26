'use client'
import React, {useEffect, useState} from 'react';
import Card from "src/components/card";
import Input from "src/components/fields/input";
import RangeInputField from "src/components/fields/rangeInputField";
import Categories from "src/components/filter/categories";
import axios from "axios";
import {getDomains, getFilterReferences} from "src/services/domains";
import {useDomainContext} from "src/context/domainsContext/DomainsContextProvider";
import {useDebouncedValue} from "src/helpers/hooks/useDebouncedValue";
import useDebouncedCallback from "src/helpers/useDebounce";


export interface IReference {
    id:number,
    displayName:string,
    checked?:boolean | undefined
}
const Filter = () => {


    const { handleChangeFilters , filters ,getProducts ,handleChangeCategory , handleChangeDomZone} = useDomainContext()


    const handleChange = (id:number) => {
        const copiedData = [...filters.categoryIds]
        const findElementIndex = copiedData.findIndex((el) => el.id === id)
        copiedData[findElementIndex].checked = !copiedData[findElementIndex].checked
        handleChangeCategory(copiedData)
    }

    const handleDomainZone = (id:number) => {
        const copiedData = [...filters.domainZones]
        const findElementIndex = copiedData.findIndex((el) => el.id === id)
        copiedData[findElementIndex].checked = !copiedData[findElementIndex].checked
        handleChangeDomZone(copiedData)
    }


    return (
        <Card>
            <Input
                placeholder={'სახელით ძიება...'}
                value={filters.name}
                name={'name'}
                handleClear={() => handleChangeFilters('','name')}
                onChange={(e) => {
                    handleChangeFilters(e.target.value, 'name')
                }}
                withClear
            />

            <RangeInputField
                title = {'ფასი'}
                min={(filters.price.valueFrom as number)}
                max={(filters.price.valueTo as number)}
                onSliderChange={({min, max}: any) => {
                   handleChangeFilters(min,'valueFrom','price')
                   handleChangeFilters(max,'valueTo','price')
                }}
                handleChange={(e, type) => {
                    handleChangeFilters(e.target.value,type,'price')
                }}
                maxNumber = {15000}
                onAfterChange = {getProducts}
            />

            <RangeInputField
                title = {'სიმბოლოების რაოდენობა'}
                min={(filters.symbols.valueFrom as number)}
                max={(filters.symbols.valueTo as number)}
                onSliderChange={({min, max}: any) => {
                    handleChangeFilters(min,'valueFrom','symbols')
                    handleChangeFilters(max,'valueTo','symbols')
                }}
                handleChange={(e, type) => {
                    handleChangeFilters(e.target.value,type,'symbols')
                }}
                maxNumber = {26}
                onAfterChange = {getProducts}
            />

            <Categories categories={filters.categoryIds} onChange = {handleChange} title={'კატეგორიები'}/>


            <Categories categories={filters.domainZones} onChange = {handleDomainZone} title={'დომენის ზონა'}/>


        </Card>
    );
};

export default Filter;
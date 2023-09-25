'use client'
import React, {useEffect, useState} from 'react';
import Card from "src/components/card";
import Input from "src/components/fields/input";
import RangeInputField from "src/components/fields/rangeInputField";
import Categories from "src/components/filter/categories";
import axios from "axios";


interface IReference {
    id:number,
    displayName:string,
    checked?:boolean | undefined
}
const Filter = () => {


    const [data,setData] = useState<IReference[]>([])
    // const [checkedItems,setCheckedItems] = useState()
    const [state, setState] = useState({
        name: '',
        priceValueFrom: 0,
        priceValueTo: 15000,
        symbolsValueFrom:0,
        symbolsValueTo:26,
    })

    const getDate = async() => {
        return await axios.get<IReference[]>('http://localhost:3000/api/references')
    }

    useEffect(() => {
        getDate().then(res => {
            const recreated = res?.data.map(item => ({...item,checked:false}))
            setData(recreated)
        })
    },[])

    const handleChange = (id:number) => {
        const copiedData = [...data]
        const findElementIndex = copiedData.findIndex((el) => el.id === id)
        copiedData[findElementIndex].checked = !copiedData[findElementIndex].checked
        setData(copiedData)
    }

    console.log(data)

    return (
        <Card>
            <Input
                placeholder={'სახელით ძიება...'}
                value={state.name}
                name={'name'}
                handleClear={() => setState({...state, name: ''})}
                onChange={(e) => setState({...state, name: e.target.value})}
                withClear
            />

            <RangeInputField
                title = {'ფასი'}
                min={state.priceValueFrom}
                max={state.priceValueTo}
                onSliderChange={({min, max}: any) => {
                    setState((prevState) => ({...prevState, priceValueFrom: min, priceValueTo: max}))
                }}
                handleChange={(e, type) => {
                    setState((prevState) => ({...prevState, [type]: e.target.value}))
                }}
                maxNumber = {15000}
            />

            <RangeInputField
                title = {'სიმბოლოების რაოდენობა'}
                min={state.symbolsValueFrom}
                max={state.symbolsValueTo}
                onSliderChange={({min, max}: any) => {
                    setState((prevState) => ({...prevState, symbolsValueFrom: min, symbolsValueTo: max}))
                }}
                handleChange={(e, type) => {
                    setState((prevState) => ({...prevState, [type]: e.target.value}))
                }}
                maxNumber = {26}
            />

            <Categories categories={data} handleChange = {handleChange}/>


        </Card>
    );
};

export default Filter;
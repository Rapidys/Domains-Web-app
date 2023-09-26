'use client'
import React, {useContext, useEffect, useState} from 'react';
import {getDomains} from "src/services/domains";
import useDebouncedCallback from "src/helpers/useDebounce";
import filter, {IReference} from "src/components/filter";

interface DomainContextType {
    products: any[];
    handleSetProducts: (payload: any[]) => void;
    handleChangeCategory: (payload: IReference[]) => void;
    handleChangeDomZone: (payload: IReference[]) => void;
    handleChangeFilters: (value: string | number, name: string, filterType?: string) => void;
    filters: any;
    getProducts: () => void,
    debouncedGetProducts: () => void,
    handleChangeSortType: (sortType: number) => void,
    incrementPage: () => void,
    isLast: boolean,
    page: number,
}

const DomainContext = React.createContext<DomainContextType>({
    products: [],
    handleSetProducts: () => {
    },
    handleChangeCategory: () => {
    },
    handleChangeDomZone: () => {
    },
    handleChangeFilters: () => {
    },
    handleChangeSortType: () => {
    },
    filters: {},
    getProducts: () => {
    },
    debouncedGetProducts: () => {
    },
    incrementPage: () => {
    },
    isLast: false,
    page: 0,
})


const DomainsContextProvider = ({children, Products, references,domainZones}: {
    children: React.ReactNode,
    Products: any[],
    references: any[],
    domainZones: any[],
}) => {

    const [isLast, setLast] = useState(false)
    const [page, setPage] = useState(1)
    const [products, setProducts] = useState<any[]>(Products)
    const [filters, setFilters] = useState({
        name: '',
        sortType: 0,
        domainZone: '',
        categoryIds: references,
        chosenDomainZones: null,
        domainZones: domainZones,
        chosenCategories: null,
        price: {
            valueFrom: '0',
            valueTo: '15000',
        },
        symbols: {
            valueFrom: '0',
            valueTo: '26',
        }
    })


    const incrementPage = () => {
        setPage(page + 1)
    }
    const handleSetProducts = (payload: any[] = []) => {
        if (payload.length < 10) {
            setLast(true)
            setPage(1)
        }
        setProducts([...products, ...payload])
    }


    const handleChangeFilters = (value: string | number, type: string, filterType?: string) => {
        setLast(false) // return pagination to initalValue
        if (filterType) {
            setFilters(prevProps => {
                return {
                    ...prevProps,
                    [filterType]: {
                        ...prevProps[filterType as keyof typeof filters] as any,
                        [type]: value
                    }
                }
            })
            return
        }
        setFilters(prevProps => ({...prevProps, [type]: value}))
    }

    const handleChangeSortType = (sortType: number) => {
        setFilters({
            ...filters,
            sortType: sortType
        })
    }

    const handleChangeCategory = (categories: IReference[]) => {
        const newArr:any = []
        categories.forEach((item) => {
            if (item.checked) {
                newArr.push(item.displayName)
            }
        })
        setFilters({...filters, categoryIds: (categories as any), chosenCategories: (newArr as any)})
    }
    const handleChangeDomZone = (zones: IReference[]) => {
        const newArr:any = []
        zones.forEach((item) => {
            if (item.checked) {
                newArr.push(item.displayName)
            }
        })
        setFilters({...filters, domainZones: (zones as any), chosenDomainZones: (newArr as any)})
    }

    const getProducts = () => {
        const data = {
            page: 1,
            priceFrom: filters.price?.valueFrom,
            priceTo: filters.price?.valueTo,
            domainName: filters.name,
            sortType: filters.sortType,
            domainZones: filters.chosenDomainZones,
            symbolsFrom: filters.symbols?.valueFrom,
            symbolsTo: filters.symbols?.valueTo,
            categoryIds: filters.chosenCategories
        }
        getDomains(data).then(res => {
            setProducts(res?.data)
        })
    }

    const debouncedGetProducts = useDebouncedCallback(getProducts, 800)


    useEffect(() => {
        if (filters?.sortType || filters?.categoryIds || filters?.chosenDomainZones) {
            setLast(false) // return pagination to initalValue
            getProducts()
        }
    }, [filters?.sortType, filters?.categoryIds,filters?.chosenDomainZones])

    useEffect(() => {
        if (filters?.name) {
            debouncedGetProducts()
        }
    }, [filters?.name])


    return (
        <DomainContext.Provider value={{
            handleSetProducts,
            handleChangeFilters,
            handleChangeSortType,
            handleChangeCategory,
            handleChangeDomZone,
            products,
            filters,
            getProducts,
            debouncedGetProducts,
            isLast,
            page,
            incrementPage
        }}>
            {children}
        </DomainContext.Provider>
    );
};

export default DomainsContextProvider;

export const useDomainContext = () => useContext(DomainContext)
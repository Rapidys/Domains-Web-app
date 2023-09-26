import {AxiosResponse} from "axios";
import {data} from "src/components/tables/products";
import {IReference} from "src/components/filter";
import axiosInstance from "src/settings/exios";

const axios = axiosInstance()
export const getDomains = async (data : any = {page:1}):Promise<AxiosResponse> => {
    return await axios.post<data>(`api/domains`,data)
}

export const getFilterReferences = async() => {
    const res = await axios.get<IReference[]>(`api/references`)
    const recreated = res?.data.map(item => ({...item,checked:false}))
    return recreated
}

export const getDomainZones = async() => {
    const res = await axios.get<IReference[]>(`api/references/domainZones`)
    const recreated = res?.data.map(item => ({...item,checked:false}))
    return recreated
}
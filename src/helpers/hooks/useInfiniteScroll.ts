import {useEffect, useState} from "react";
import {AxiosResponse} from "axios";


interface IUseInfiniteScroll{
    apiCall:(page:number) => Promise<AxiosResponse> ,
    ref:any,
    callBack:(params:any[]) => void,
    payload?:any,
    isLast:boolean,
    page:number,
    incrementPage:() => void
}
export const UseInfiniteScroll = ({apiCall,ref ,payload,isLast,page,incrementPage,callBack}:IUseInfiniteScroll) => {

    const [loading,setLoading] = useState(false)

    useEffect(() => {
        if (!ref?.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (!isLast && entry.isIntersecting && !loading) {
                setLoading(true)
                incrementPage()
            }
        },
        {
            threshold: 1,
        }
        );
        observer.observe(ref.current);
        return () => {
            // Optionally, disconnect the observer when the component unmounts
            observer.disconnect();
        };
    }, [apiCall, callBack, isLast, loading, ref]);

    useEffect(() =>{
        if(page > 1){
            apiCall({...payload,page:page}).then((response)=> {
                setLoading(false)
                callBack(response?.data)
            })
        }
    },[page])


    return {loading}

}
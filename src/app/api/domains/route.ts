import {NextResponse} from "next/server";
import {response} from './domains'
import {NextApiRequest, NextApiResponse} from "next";
import {Request} from "next/dist/compiled/@edge-runtime/primitives";
import {Sort, SortArrayByDates, SortByAlphabet} from "src/helpers/sortbyDates";


const itemsPerPage = 10;


export async function POST(req:Request,res:NextApiResponse){

    const body = await req.json()
    const { page ,sortType ,priceFrom,priceTo ,domainZones ,domainName,symbolsFrom,symbolsTo,categoryIds } = body

    // sortType : 1 = byAddDate , 2=byEndDate,byPriceAsc = 3 , byPriceDesc = 4,byAlphabet = 5

    let data = []

    switch (sortType){
        case 1:
            data = SortArrayByDates(response,'startDate')
            break;
        case 2:
            data = SortArrayByDates(response,'endDate')
            break;
        case 3:
            data = Sort(response,'price','ASC')
            break;
        case 4:
            data = Sort(response,'price')
            break;
        case 5:
            data = SortByAlphabet(response,'domainName')
            break;
        default:
            data = response
    }

    if(priceFrom >= 0 && priceTo >= 0){
            data = data.filter((item) => +item.price >= +priceFrom && +item.price <= +priceTo);
    }
    if(symbolsFrom >= 0 && symbolsTo >= 0){
        data = data.filter((item) => item.domainName.length >= symbolsFrom && item.domainName.length <= symbolsTo);
    }
    if(domainZones){
           data = data.filter((item) => domainZones.includes(item.domainZone));
    }

    if(domainName){
        data = data.filter((item) => item.domainName.toLowerCase().includes(domainName.toLowerCase()));
    }

    if(categoryIds?.length > 0){
        data = data.filter((item) => categoryIds.includes(item.categoryId))
    }


    if(page){


        const startIndex = (+page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const portion = data.slice(startIndex, endIndex);

        return NextResponse.json(portion)
    }

}
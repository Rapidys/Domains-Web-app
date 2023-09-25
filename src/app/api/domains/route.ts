import {Request} from "next/dist/compiled/@edge-runtime/primitives";
import {NextResponse} from "next/server";
import {response} from './domains'
import {NextApiRequest, NextApiResponse} from "next";
import {throws} from "assert";


const itemsPerPage = 10;


export async function GET(req:NextApiRequest,res:NextApiResponse){

    if(req.url){
        const url = new URL(req.url)

        const page = url.searchParams.get("page")

        // @ts-ignore
        const startIndex = (+page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const portion = response.slice(startIndex, endIndex);

        return NextResponse.json(portion)
    }

}
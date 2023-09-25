import {Request} from "next/dist/compiled/@edge-runtime/primitives";
import {NextResponse} from "next/server";
import {response} from './categories'

export async function GET(req:Request){
    return NextResponse.json(response)
}
import {Request} from "next/dist/compiled/@edge-runtime/primitives";
import {NextResponse} from "next/server";
import {zones} from './zones'

export async function GET(req:Request){
    return NextResponse.json(zones)
}
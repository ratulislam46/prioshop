import { DBConnect } from "@/src/lib/DBConnect";
import { NextResponse } from "next/server";

export async function GET() {

    const data = await DBConnect("products").find().toArray()
    // console.log(data);
    return NextResponse.json(data)
}

export async function POST(req) {

    const postedData = await req.json();
    const result = await DBConnect("products").insertOne(postedData)

    return NextResponse.json(result)
}
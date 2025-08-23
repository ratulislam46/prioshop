import { DBConnect } from "@/src/lib/DBConnect";

export async function GET() {

    const data = await DBConnect("products").find().toArray()
    // console.log(data);
    return Response.json(data)
}

export async function POST(req) {

    const postedData = await req.json();
    const result = await DBConnect("products").insertOne(postedData)

    return Response.json(result)
}
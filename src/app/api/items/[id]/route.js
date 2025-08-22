import { DBConnect } from "@/src/lib/DBConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {

    const p = await params;
    const singleData = await DBConnect("products").findOne({ _id: new ObjectId(p.id) })
    return Response.json(singleData)
}

export async function DELETE(req, { params }) {
    const p = await params;
    const deleteSingleData = await DBConnect("products").deleteOne({ _id: new ObjectId(p.id) });
    return Response.json({ deleteSingleData })
}
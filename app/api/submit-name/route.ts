import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? "";
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const obj = await req.json();
    const { name, present } = obj;

    await client.connect();
    const database = client.db("firstDatabase");
    const collection = database.collection("collectionFirst");

    await collection.insertOne({ name, present });

    return NextResponse.json({
      message: `${name}: Name submitted successfully! ${present} present`,
    });
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json({ message: "Error: Name not submitted!" });
  }
}

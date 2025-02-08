import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(req: Request) {
  const obj = await req.json();
  const name = obj.name
  const present = obj.present
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("firstDatabase");
    const collection = database.collection("collectionFirst");
    await collection.insertOne({ name, present });

    return NextResponse.json({ message: `{name}: Name submitted successfully!` });
  } catch (error) {
    return NextResponse.json({ message: `{name}: Name not submitted!` })
  } finally {
    await client.close();
  }
}

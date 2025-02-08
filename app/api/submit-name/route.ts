import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(req: Request) {
  const client = new MongoClient(process.env.MONGODB_URI);
  const obj = await req.json();
  const name = obj.name;
  console.log("here");
  console.log(name);
  return NextResponse.json({ message: "Name submitted successfully!" });
}

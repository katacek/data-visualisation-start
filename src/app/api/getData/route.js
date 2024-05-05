// import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { dataFromBE } from './data_from_be.js';

export async function GET() {
//   const client = new MongoClient(process.env.MONGODB_URI);
//   await client.connect();
//   const database = client.db(process.env.MONGO_DB_NAME);
//   const collections = await database.listCollections().toArray();
//   await client.close();

    const { data } = dataFromBE;
    return NextResponse.json(data);
}
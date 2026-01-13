import { NextResponse } from "next/server";
import app from "@/app/lib/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export async function GET() {
  const db = getFirestore(app);
  const snapshot = await getDocs(collection(db, "bikes"));

  const bikes = snapshot.docs.map(doc => doc.data());

  console.log("API /bikes called. Count:", bikes.length);

  return NextResponse.json(bikes);
}

import { NextResponse } from "next/server";
import app from "@/app/lib/firebase";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

export async function POST(req: Request) {
  const { docId } = await req.json();
  const db = getFirestore(app);

  await updateDoc(doc(db, "bikes", docId), {
    status: "locked"
  });

  console.log("Bike locked due to unpaid rental:", docId);

  return NextResponse.json({ success: true });
}

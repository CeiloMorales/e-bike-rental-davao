"use client";

import { useEffect, useState } from "react";
import app from "@/app/lib/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function AdminPage() {
  const [bikes, setBikes] = useState<any[]>([]);

  useEffect(() => {
    const fetchBikes = async () => {
      const db = getFirestore(app);
      const snapshot = await getDocs(collection(db, "bikes"));

      console.log("Snapshot size:", snapshot.size);
      snapshot.docs.forEach(doc => console.log("Bike doc:", doc.data()));

      const data = snapshot.docs.map(doc => doc.data());
      setBikes(data);
    };

    fetchBikes();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🛠️ Admin Panel</h1>
      <h2>E-Bike Units</h2>

      {bikes.length === 0 && <p>No bikes found.</p>}

      {bikes.map((bike, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <p><strong>Bike ID:</strong> {bike.bikeId}</p>
          <p><strong>Station:</strong> {bike.station}</p>
          <p><strong>Status:</strong> {bike.status}</p>
        </div>
      ))}
    </div>
  );
}

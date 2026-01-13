export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🚲 E-Bike Rental App</h1>

      <p>
        Welcome to the E-Bike Rental App. Users can rent e-bikes from stations
        across Davao City.
      </p>

      <ul>
        <li>Scan QR Code to rent a bike</li>
        <li>₱120 for the first hour</li>
        <li>₱50 for every succeeding hour</li>
        <li>Bike is locked if payment is not received</li>
        <li>User is prompted to return bike to nearest parking bay</li>
      </ul>

      <p>
        This page represents the renter-facing mobile application.
      </p>
    </div>
  );
}

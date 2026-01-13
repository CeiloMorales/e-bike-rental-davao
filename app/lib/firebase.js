export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🚲 E-Bike Rental App</h1>

      <p>
        Welcome to the E-Bike Rental App. Users can rent available e-bikes from
        designated stations around the city.
      </p>

      <ul>
        <li>Scan QR Code to rent a bike</li>
        <li>Rental starts at ₱120 for the first hour</li>
        <li>₱50 for every succeeding hour</li>
        <li>If payment is not received, the bike will be locked automatically</li>
        <li>User is prompted to return the bike to the nearest parking bay</li>
      </ul>

      <p>
        This app monitors rental duration and communicates with the backend
        system to update bike status in real time.
      </p>
    </div>
  );
}

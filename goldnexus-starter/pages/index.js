import { useEffect, useState } from "react";

export default function Home() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch("/api/gold");
        const data = await res.json();
        if (data && typeof data.price === "number") {
          setPrice(data.price);
        } else {
          setError("No price in response");
        }
      } catch (e) {
        console.error(e);
        setError("Failed to load price");
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        color: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        padding: "20px"}}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Gold Nexus</h1>
      <p style={{ marginBottom: "1.5rem", opacity: 0.8, textAlign: "center" }}>
        The Global Gateway for Gold & Luxury
      </p>

      <div style={{ border: "1px solid #d4af37", borderRadius: "10px",
                    padding: "20px 30px", textAlign: "center",
                    marginBottom: "1.5rem", minWidth: "260px" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Live Gold Price (XAU / USD)</h2>
        <div style={{ fontSize: "1.8rem", color: "#d4af37" }}>
          {price ? `$${price.toFixed(2)} / oz`
                 : error ? "Error loading price" : "Loading..."}
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "1rem",
                    flexWrap: "wrap", justifyContent: "center" }}>
        <button style={btnStyle}>Sell Gold</button>
        <button style={btnStyle}>Verify Authenticity</button>
        <button style={btnStyle}>Store in Vault</button>
        <button style={btnOutlineStyle}>Become a Partner</button>
      </div>

      <p style={{ fontSize: "0.9rem", opacity: 0.7, marginTop: "10px" }}>
        Knowledge is Free. Trust is Priceless.
      </p>
    </div>
  );
}

const btnStyle = {
  backgroundColor: "#d4af37",
  border: "none",
  color: "#000",
  padding: "10px 18px",
  borderRadius: "999px",
  cursor: "pointer",
  fontSize: "0.9rem",
  fontWeight: "600",
};

const btnOutlineStyle = {
  ...btnStyle,
  backgroundColor: "transparent",
  color: "#d4af37",
  border: "1px solid #d4af37",
};

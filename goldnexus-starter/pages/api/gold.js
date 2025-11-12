export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_GOLD_API_KEY,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok || !data || typeof data.price !== "number") {
      console.error("GoldAPI error:", data);
      return res.status(502).json({ error: "GoldAPI error" });
    }

    return res.status(200).json({ price: data.price });
  } catch (e) {
    console.error("Server error:", e);
    return res.status(500).json({ error: "Server error" });
  }
}

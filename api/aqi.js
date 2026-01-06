export default async function handler(req, res) {
  const url = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=23.0225&longitude=72.5714&hourly=pm2_5,pm10,us_aqi&timezone=auto";

  const r = await fetch(url);
  const data = await r.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}

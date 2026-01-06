export default async function handler(req, res) {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=23.0225&longitude=72.5714&current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index&timezone=auto";
  const r = await fetch(url);
  const data = await r.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}

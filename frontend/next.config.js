/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:8000",
    MAPBOX_ACCESS_TOKEN:
      "pk.eyJ1IjoidGNvcmxleSIsImEiOiJjbDFncGQ1M3YwNHc3M2lwd3FpZ3N3YTJtIn0.7HfvPA-N6yNoWc3eM6SkfQ",
  },
};

module.exports = nextConfig;

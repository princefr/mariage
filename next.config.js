/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_DOCS_EMAIL: process.env.GOOGLE_DOCS_EMAIL,
    GOOGLE_DOCS_SHEET_ID: process.env.GOOGLE_DOCS_SHEET_ID
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // add custom loader next time
    formats: ["image/avif", "image/webp"],
    domains: ["images.ctfassets.net"]
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};

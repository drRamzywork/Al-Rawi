const fs = require("fs");
const path = require("path");
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.dropbox.com" },
      { protocol: "https", hostname: "dl.dropboxusercontent.com" },
      { protocol: "https", hostname: "zamakan.suwa.io" },
      { protocol: "https", hostname: "app.thisisislam.net" },
      { protocol: "https", hostname: "zamakanweb1.suwa.io" },
    ],
  },

  i18n,
};

try {
  const languagesPath = path.join(__dirname, "public/locales.json");
  const locales = JSON.parse(fs.readFileSync(languagesPath, "utf8"));

  nextConfig.i18n = {
    locales: locales.map((lang) => lang),
    defaultLocale: "ar",
    localeDetection: false,
  };
} catch (error) {
  console.warn(
    "Could not dynamically load locales, using default settings:",
    error,
    locales
  );
  nextConfig.i18n = {
    locales: ["ar", "en"], // Fallback locales list, including Arabic and English
    defaultLocale: "ar",
    localeDetection: false,
  };
}

module.exports = nextConfig;

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.resolve.fallback = { crypto: false };
    return config;
  },
  reactStrictMode: true,
  env: {
    LIFF_ID: process.env.LIFF_ID,
  },
};

//'1657764194-vjw79d0e'
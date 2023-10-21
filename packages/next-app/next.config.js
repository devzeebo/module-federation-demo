const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** @param {import('webpack').Configuration} config  */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new NextFederationPlugin({
        name: 'host-app',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          remote: 'remote@http://localhost:3001/remote.js',
        },
      }));
    }

    return config;
  },
};

module.exports = nextConfig;

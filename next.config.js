/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        creators: 'pyrosprites, shyyassassin',
    },
    reactStrictMode: true,
    trailingSlash: false,
    distDir: ".next",
    output: process.env.TAURI_BUILD ? "export" : undefined,
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: "bottom-right"
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"]
        });
        return config;
    }
};

module.exports = nextConfig;

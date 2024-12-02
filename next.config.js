
import "./src/env.js";
import createMDX from '@next/mdx';

/** @type {import("next").NextConfig} */
const config = {
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'utfs.io',
              port: '',
              pathname: '/f/**',
            },
        ],
    },
};

const withMDX = createMDX({});

export default withMDX(config);

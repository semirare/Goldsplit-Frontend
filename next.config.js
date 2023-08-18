/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    trailingSlash: true,
    async rewrites() {
        return [
            {
                source: "/goldsplit/:path*/",
                destination: 'http://localhost:8000/goldsplit/:path*/'
            }
        ]
    }
}

module.exports = nextConfig

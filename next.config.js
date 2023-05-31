/** @type {import('next').NextConfig} */

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ]
  }
  return {
    rewrites,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn-old.brawlify.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
}

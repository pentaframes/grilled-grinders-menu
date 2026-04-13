/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        // Allow any https image source (admins may use various CDNs)
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;

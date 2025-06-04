module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/photos/**',
          },
          {
            protocol: 'https',
            hostname: 'cadsum-backend.onrender.com', // Replace with your actual API domain
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'localhost',
            port: '7214', // or whatever port your API runs on
            pathname: '/**',
          },
        ],
    }
  };
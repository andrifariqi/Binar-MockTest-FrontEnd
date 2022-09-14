/** @type {import('next').NextConfig} */
module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/:path*",
        destination: "https://test-binar.herokuapp.com/:path*",
      },
    ];
  };
  return { rewrites };
};

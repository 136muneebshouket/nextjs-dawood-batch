/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Add other domains if needed
    domains: ['ik.imagekit.io'], // Add other domains if needed
  },
  env: {

    DB_URI:
      "",

    SITE_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "coddingwithitzone",

    EMAIL_HOST: "smtp.gmail.com",
    EMAIL_PORT: 587,
    EMAIL_USER: "muneeb.office136@gmail.com",
    EMAIl_PASS: "",
    

  
  },
};

export default nextConfig;

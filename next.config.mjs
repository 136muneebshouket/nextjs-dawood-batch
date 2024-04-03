/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI:
      "",

    SITE_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "coddingwithitzone",

    EMAIL_HOST: "smtp.gmail.com",
    EMAIL_PORT: 587,
    EMAIL_USER: "muneeb.office136@gmail.com",
    EMAIl_PASS: "",
    EMAIl_FROM: "jakayla.toy@ethereal.email",
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {

    env:{
        DB_URI:'mongodb://cashcarrycity:u7MAlVNWqgdnXY8I@ac-sanoj4x-shard-00-00.bgihgro.mongodb.net:27017,ac-sanoj4x-shard-00-01.bgihgro.mongodb.net:27017,ac-sanoj4x-shard-00-02.bgihgro.mongodb.net:27017/test?replicaSet=atlas-4omsud-shard-0&ssl=true&authSource=admin',

        SITE_URL:'http://localhost:3000' ,
        NEXTAUTH_SECRET:'coddingwithitzone',
    }
};

export default nextConfig;

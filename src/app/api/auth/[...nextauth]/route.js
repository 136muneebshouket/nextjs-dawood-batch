

// import { authOptions } from "@/utils/authoptions";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import user from "@/schemas/user";
import bcrypt from "bcrypt";
import dbConnect from "@/config/dbconnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await dbConnect();
          const foundUser = await user.findOne({ email: email });
          if (!foundUser) {
            throw new Error("User not found");
          }

          const passwordsMatch = await bcrypt.compare(password, foundUser.password);
          // console.log(passwordsMatch)

          if (!passwordsMatch) {
            throw new Error("Password not match");
          }
         
          return foundUser;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/login",
  //   // signIn: '/auth/signin',
  // },

  secret: process.env.NEXTAUTH_SECRET,
 
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

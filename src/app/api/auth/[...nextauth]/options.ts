import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { connect } from "@/database/mongo.config";
import User from "@/models/User";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }: any) {
      if (account.provider === "google") {
        const { name, email, image } = user;
        try {
          await connect();
          const userExist = await User.findOne({ email });

          if (!userExist) {
            const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/user`, {
              cache: "no-cache",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                image,
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
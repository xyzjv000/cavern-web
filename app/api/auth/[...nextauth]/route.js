import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase"; // Adjust the import path

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          const { user } = userCredential;
          return { id: user.uid, email: user.email };
        } catch (error) {
          let errorMessage;

          switch (error.code) {
            case "auth/invalid-email":
              errorMessage = "The email address is not valid.";
              break;
            case "auth/user-not-found":
              errorMessage = "No user found with this email address.";
              break;
            case "auth/wrong-password":
              errorMessage = "The password is incorrect.";
              break;
            case "auth/user-disabled":
              errorMessage = "The user account has been disabled.";
              break;
            case "auth/too-many-requests":
              errorMessage = "Too many requests. Please try again later.";
              break;
            default:
              errorMessage =
                "An error occurred during sign-in. Please try again.";
              break;
          }

          console.error("Error logging in user:", errorMessage);
          throw new Error(errorMessage); // Throw the custom error message
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom sign-in page
    error: "/login",
    newAccount: "/register",
    signOut: "/login",
  },
  session: {
    strategy: "jwt", // Use JWT for session management
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to home if the user is logged in
      if (url === "/login") {
        return baseUrl; // Redirect to home page after sign in
      }
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };

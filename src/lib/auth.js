import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { User } from "./models";
import { connectToDb } from "./utils";
export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [ GitHub ],
    callbacks: {
      async signIn({account, profile}) {
        if(account.provider === "github") {
          connectToDb()
          try { 
              const user = await User.findOne({email:profile.email})
              if(!user) {
                  const newUser = new User({
                      username: profile.name, 
                      email:profile.email,
                      img: profile.avatar_url,
                      bookmarks: [], 
                  })
                  await newUser.save();
              }
          }
          catch(err) {
              console.log(err);
              return false; 
          }
        }
        return true
      },
  },
})
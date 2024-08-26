import NextAuth from "next-auth/next";
import DiscordProvider from 'next-auth/providers/discord'

export const authOptions = {
    providers: [
    DiscordProvider({
        
    })
    ]
}

export default NextAuth(authOptions)
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        '980361281361-blr512tn2airapoojiudini4bbh0b5lv.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
  },
})

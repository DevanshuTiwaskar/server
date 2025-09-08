import { config } from "dotenv"
import { TwitterApi } from "twitter-api-v2"


const twitterClient = new TwitterApi({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    accessToken: process.env.
})
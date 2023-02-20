import Head from "next/head";
import packageJson from "../package.json";
import MyApp from "./_app";

// const express = require('express')
// const bodyparser = require('body-parser')
// const signature = require('@line/bot-sdk').signature

// const app = express()
// app.use(bodyparser.urlencoded({ extended: false}))
// app.use(bodyparser.json())

// app.post('/webhook', (req, res) => {
//   const signature = req.get('x-line-signature')
//   const body = req.body
//   const channelSecret = process.env.CHANNEL_SECRET
//   const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN

//   if (signature !== signature.validate(body, channelSecret)) {
//     console.error('signature validation failed')
//     res.sendStatus(400)
//     return
//   } 
//   if (body.events && body.events.length > 0) {
//     body.events.forEach((event) => {
//       console.log(event)
//     })
//   }
// }

export default function Home(props) {
  if (props.liff?.isLoggedIn()) {
    console.log(props.liff.getDecodedIDToken());
    const context = props.liff.getContext()
    const liffToken = props.liff.getAccessToken()
    conslose.log(setUid(context.userId))
    setAccessToken(liffToken)
  }

  console.log(props.liff);
  return (
    <div>
      <button
        liffObject={props.liffObject}
        onClick={() => {props.liff.login()}}
      >login button</button>
      <button >button1</button>
      <button >button2</button>
    </div>
  );
}

// import React from 'react';
// // import request from 'request-promise-native';
// // const request = require("request-promise-native");
// import axios from 'axios';

// async function getServerToken(jwttoken) {
//     const postdata = {
//         url: 'https://api.line.me/v2/oauth/accessToken',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         },
//         form: {
//             "grant_type": "client_credentials",
//             "client_id": 1657764194,
//             "client_secret": "abed5a155c6ee69d28e7e0e3293f2902",
//         }
//     };
//     try {
//         const data = await axios.post(postdata);
//         return JSON.parse(data).access_token;
//     } catch (err) {
//         console.log(err);
//     }
// }

// export default getServerToken;
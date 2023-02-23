import "../styles/globals.css";
import { useState, useEffect } from "react";
import {getServerToken} from "../pages/token";

function MyApp({ Component, pageProps }) {
  const [liffObject, setLiffObject] = useState(null);
  const [liffError, setLiffError] = useState(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff").then((liff) => {
      console.log("start liff.init()...");
      liff
        .init({ liffId: '1657764194-vjw79d0e'})
        .then(() => {
          console.log("liff.init() done");
          setLiffObject(liff);
          console.log(liff.isLoggedIn());
          if (liff.isLoggedIn()) {
            console.log(getAccessToken);
            console.log(liff.getDecodedIDToken());
            const context = liff.getContext()
            console.log(getServerToken())
            const liffToken = liff.getAccessToken()
            if (liffToken) {
              console.log(liffToken)
            }
            setUid(context.userId)
            console.log(context.userId)
            // setAccessToken(liffToken)
            // console.log(setAccessToken(liffToken))
            const getAccessToken = liff.getAccessToken();
            console.log(getAccessToken);
            if (!getAccessToken) {
              window.alert('LIFFの認証に失敗しました。')
              return
            }
          }
          console.log(liffToken);
        })
        .catch((error) => {
          console.log(`liff.init() failed: ${error}`);
          if (!process.env.liffId) {
            console.info(
              "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
            );
          }
          setLiffError(error.toString());
        });
    });
  }, []);

  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  return <Component {...pageProps} />;
}

export default MyApp;

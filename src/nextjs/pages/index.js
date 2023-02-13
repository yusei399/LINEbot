import Head from "next/head";
import packageJson from "../package.json";
import MyApp from "./_app";

export default function Home(props) {
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/
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
    </div>
  );
}

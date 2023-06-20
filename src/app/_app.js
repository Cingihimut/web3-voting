// "use client";
import RootLayout from "./layout";
// import { useEffect, useState } from "react";
// import { connectWeb3 } from "./utils/web3";

function MyApp({ Component, pageProps }) {
  // const [provider, setProvider] = useState(null);

  // useEffect(() => {
  //   const initializeWeb3 = async () => {
  //     try {
  //       await connectWeb3();
  //       setProvider(web3);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   initializeWeb3();
  // }, []);

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;

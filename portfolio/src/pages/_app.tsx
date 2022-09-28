import "../styles/globals.css";
import type { AppProps } from "next/app";
import { withRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withRouter(MyApp);

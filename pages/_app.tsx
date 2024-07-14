import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '../styles/login/Login.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

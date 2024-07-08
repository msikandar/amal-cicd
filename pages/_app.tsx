import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Conditional from "../components/common/Conditional";
import { NextComponentType } from "next";
import { SessionProvider } from "next-auth/react";
import Auth from "../components/auth/Auth";

type CustomAppProps = AppProps & {
  Component: NextComponentType & { noAuth?: boolean };
};
const App: React.FC<CustomAppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Conditional
      test={!Component.noAuth}
      fallback={<Component {...pageProps} />}
    >
      <SessionProvider session={session} refetchOnWindowFocus={false}>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </SessionProvider>
    </Conditional>
  );
};

export default App;

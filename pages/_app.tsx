import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Conditional from "./components/common/Conditional";
import { NextComponentType } from "next";
import { SessionProvider } from "next-auth/react";

type CustomAppProps = AppProps & {
  Component: NextComponentType & { noAuth?: boolean };
};
const App: React.FC<CustomAppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  console.log(Component);
  return (
    <Conditional
      test={true}
      fallback={<Component {...pageProps} />}
    >
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Conditional>
  );
};

export default App;

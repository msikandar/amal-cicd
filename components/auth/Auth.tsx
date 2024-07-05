import { signIn, useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";

const Auth: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status, update } = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    if (status === "loading") return;
    if (!isUser || session.error === "RefereshAccessTokenError") {
      signIn("github");
    }
  }, [isUser, status, session]);

  if (isUser) {
    return children;
  }

  return <div>Loadin Session...</div>;
};

export default Auth;

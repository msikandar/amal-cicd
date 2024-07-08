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

  useEffect(() => {
    if (isUser && !session?.error) {
      const tokenExpires = session?.token?.expires;
      const tokenExpiresInMilliseconds = tokenExpires
        ? tokenExpires - Date.now()
        : null;
      if (tokenExpiresInMilliseconds && tokenExpiresInMilliseconds > 0) {
        const timeoutId = setTimeout(
          () => update(),
          tokenExpiresInMilliseconds
        );
        return () => clearTimeout(timeoutId);
      }
    }
  }, [isUser, session, update]);

  if (isUser) {
    return children;
  }

  return <div>Loadin Session...</div>;
};

export default Auth;

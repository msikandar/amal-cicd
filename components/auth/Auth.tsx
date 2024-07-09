import { signIn, useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";

const Auth: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status, update } = useSession();
  const isUser = !!session?.user;

  // Effect to handle sign-in
  useEffect(() => {
    if (status === "loading") return;
    // Sign in if there's no user or if there's a token refresh error
    if (!isUser || session.error === "RefreshAccessTokenError") {
      signIn("github");
    }
  }, [isUser, status, session]);

  // Effect to handle token refresh
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

  // Render children if user is signed in, otherwise show loading
  if (isUser) {
    return <>{children}</>;
  }

  return <div>Loading Session...</div>;
};

export default Auth;

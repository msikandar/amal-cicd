import { PropsWithChildren, ReactNode } from "react";

type Props = { fallback?: ReactNode; test?: boolean };
const Conditional: React.FC<PropsWithChildren<Props>> = ({
  children,
  test,
  fallback = null,
}) => {
  return <>{!!test ? children : fallback}</>;
};

export default Conditional;

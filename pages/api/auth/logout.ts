import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const logout = (_req: NextApiRequest, res: NextApiResponse) => {
  return res.redirect("/");
};

export default logout;

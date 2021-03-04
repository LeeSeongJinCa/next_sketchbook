import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  text: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ text: "Hello" });
};

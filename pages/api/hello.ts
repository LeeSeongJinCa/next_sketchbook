import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

type Data = {
  name: string;
};

const cors = Cors({
  methods: ["GET", "HEAD"],
});

type CorsFn = typeof cors;

const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  fn: CorsFn
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await runMiddleware(req, res, cors);

  res.status(200).json({ name: "Hello" });
};

export default handler;

import client from "@/libs/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      //   email: "luckseok1@gmail.com",
      name: "seok",
    },
  });
  res.json({
    ok: true,
  });
}

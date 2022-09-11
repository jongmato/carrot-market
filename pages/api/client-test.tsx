import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../libs/client';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await client.user.create({
    data: {
      email: 'test@test.com',
      name: 'jay',
    },
  });
  res.json({
    ok: true,
  });
}

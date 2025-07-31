import configPromise from "@payload-config";
import { getPayload as load } from "payload";

export const getPayload = async () => {
  const payload = await load({ config: await configPromise });

  return payload;
};

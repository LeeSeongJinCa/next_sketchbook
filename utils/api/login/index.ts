import api from "@utils/api/client";
import { ReqLogin } from "@utils/payloads/request";
import { ResLogin } from "@utils/payloads/response";

export const fetchLogin = ({ id, password }: ReqLogin) => {
  return api<ResLogin>("/user/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id, password }),
  });
};

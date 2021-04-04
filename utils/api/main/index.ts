import api from "@utils/api/client";
import { ResTrashCans, ResTrashes } from "@utils/payloads/response";

export const fetchTrashes = () => {
  return api<ResTrashes>("/trash/all", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const fetchTrashCans = () => {
  return api<ResTrashCans>("/trash-can/all", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

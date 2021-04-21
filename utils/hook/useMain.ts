import { useEffect } from "react";

import useTrashes from "./useTrashes";
import useTrashCans from "./useTrashCans";
import { ReqLogin } from "@utils/payloads/request";

const useMain = (loginData: ReqLogin) => {
  const [trashes, initTrashes] = useTrashes(loginData);
  const [trashCans, initTrashCans] = useTrashCans(loginData);

  useEffect(() => {
    initTrashes();
    initTrashCans();
  }, []);

  return [trashes, trashCans] as const;
};

export default useMain;

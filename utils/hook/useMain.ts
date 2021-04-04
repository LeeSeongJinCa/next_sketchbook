import { useEffect } from "react";

import useTrashes from "./useTrashes";
import useTrashCans from "./useTrashCans";

const useMain = (id: string, password: string) => {
  const [trashes, initTrashes] = useTrashes(id, password);
  const [trashCans, initTrashCans] = useTrashCans(id, password);

  useEffect(() => {
    if (false) {
      initTrashes();
      initTrashCans();
    }
  }, []);

  console.log("ReRendered : useMain", trashes, trashCans);

  return [trashes, trashCans] as const;
};

export default useMain;

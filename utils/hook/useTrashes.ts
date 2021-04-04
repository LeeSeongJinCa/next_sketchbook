import { useCallback } from "react";

import { fetchLogin } from "@utils/api/login";
import { fetchTrashes } from "@utils/api/main";
import { ResTrash } from "@utils/payloads/response";
import {
  SET_TRASHES,
  useTrashDispatch,
  useTrashState,
} from "@utils/contextAPI/trashes";

const useTrashes = (id: string, password: string) => {
  const dispatch = useTrashDispatch();
  const { trashes } = useTrashState();

  const setTrashes = useCallback((payload: ResTrash[]) => {
    dispatch({ type: SET_TRASHES, payload });
  }, []);

  const initTrashes = useCallback(async () => {
    try {
      const res = await fetchTrashes();

      setTrashes(res.trashes);
    } catch (err) {
      const { status } = err as Response;

      if (status === 401) {
        const { accessToken } = await fetchLogin(id, password);

        localStorage.setItem("accessToken", accessToken);
        initTrashes();
      }
    }
  }, []);

  return [trashes, initTrashes] as const;
};

export default useTrashes;

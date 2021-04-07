import { useCallback } from "react";

import { fetchLogin } from "@utils/api/login";
import { fetchTrashes } from "@utils/api/main";
import { ResTrash } from "@utils/payloads/response";
import {
  SET_TRASHES,
  useMainDispatch,
  useMainState,
} from "@utils/contextAPI/main";
import { ReqLogin } from "@utils/payloads/request";

const useTrashes = (loginData: ReqLogin) => {
  const dispatch = useMainDispatch();
  const { trashes } = useMainState();

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
        const { accessToken } = await fetchLogin(loginData);

        localStorage.setItem("accessToken", accessToken);
        initTrashes();
      }
    }
  }, []);

  return [trashes, initTrashes] as const;
};

export default useTrashes;

import { useCallback } from "react";

import { fetchLogin } from "@utils/api/login";
import { fetchTrashCans } from "@utils/api/main";
import { ResTrash } from "@utils/payloads/response";
import {
  SET_TRASHCANS,
  useMainDispatch,
  useMainState,
} from "@utils/contextAPI/main";

const useTrashCans = (id: string, password: string) => {
  const dispatch = useMainDispatch();
  const { trashCans } = useMainState();

  const setTrashCans = useCallback((payload: ResTrash[]) => {
    dispatch({ type: SET_TRASHCANS, payload });
  }, []);

  const initTrashCans = useCallback(async () => {
    try {
      const res = await fetchTrashCans();

      setTrashCans(res.trashCans);
    } catch (err) {
      const { status } = err as Response;

      if (status === 401) {
        const { accessToken } = await fetchLogin(id, password);

        localStorage.setItem("accessToken", accessToken);
        initTrashCans();
      }
    }
  }, []);

  return [trashCans, initTrashCans] as const;
};

export default useTrashCans;

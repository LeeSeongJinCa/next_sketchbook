import { useCallback, useEffect, useState } from "react";

import { ResTrash } from "@utils/payloads/response";

type TrashArea = Record<string, number>;

type Area = [string, number];

const useMainAreaState = (trashes: ResTrash[], trashCans: ResTrash[]) => {
  const [trashArea, setTrashArea] = useState<Area[]>([]);
  const [trashCanArea, setTrashCanArea] = useState<Area[]>([]);

  const getMapped = useCallback((arr: ResTrash[]) => {
    const t: TrashArea = {};

    arr.map(({ area }) => (t[area] = (t[area] || 0) + 1));

    return Object.entries(t);
  }, []);

  useEffect(() => {
    setTrashArea(getMapped(trashes));
  }, [trashes]);
  useEffect(() => {
    setTrashCanArea(getMapped(trashCans));
  }, [trashCans]);

  return [trashArea, trashCanArea] as const;
};

export default useMainAreaState;

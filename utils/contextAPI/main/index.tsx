import React, { useReducer, useContext, createContext, Dispatch } from "react";

import { ResTrash } from "@utils/payloads/response";

type TrashState = {
  trashes: ResTrash[];
  trashCans: ResTrash[];
};

export const SET_TRASHES = "main/SET_TRASHES";
export const SET_TRASHCANS = "main/SET_TRASHCANS";

export const setTrashes = (trashes: ResTrash[]) => ({
  type: SET_TRASHES,
  payload: trashes,
});
export const setTrashCans = (trashCans: ResTrash[]) => ({
  type: SET_TRASHCANS,
  payload: trashCans,
});

type TrashAction = ReturnType<typeof setTrashes | typeof setTrashCans>;

type TrashDispatch = Dispatch<TrashAction>;

const trashInitialState: TrashState = {
  trashCans: [
    {
      photo_url: "/sadf/asf.pngas",
      latitude: 36.615,
      longitude: 127.508,
      area: "충청북도",
      address: "대전광역시",
      created_at: "2021-03-31T05:22:18.741735Z",
    },
    {
      photo_url: "/sadf/asf.pngas",
      latitude: 36.333,
      longitude: 127.376,
      area: "서울특별시",
      address: "서울특별시",
      created_at: "2021-03-31T05:22:18.741735Z",
    },
    {
      photo_url: "/sadf/asf.pngas",
      latitude: 36.35,
      longitude: 127.396,
      area: "부산광역시",
      address: "부산광역시",
      created_at: "2021-03-31T05:22:18.741735Z",
    },
    {
      photo_url: "/sadf/asf.pngas",
      latitude: 37.54,
      longitude: 127.002,
      area: "광주광역시",
      address: "광주광역시",
      created_at: "2021-03-31T05:22:18.741735Z",
    },
    {
      photo_url: "/sadf/asf.pngas",
      latitude: 37.444,
      longitude: 126.702,
      area: "인천광역시",
      address: "인천광역시",
      created_at: "2021-03-31T05:22:18.741735Z",
    },
    {
      photo_url: "/sadf/asf.pngas",
      latitude: 35.843,
      longitude: 128.58,
      area: "경기도",
      address: "경기도",
      created_at: "2021-03-31T05:22:18.741735Z",
    },
    {
      photo_url: "/sadf/asf.pngas",
      latitude: 35.167,
      longitude: 129.057,
      area: "제주특별자치도",
      address: "제주특별자치도",
      created_at: "2021-03-31T05:22:18.741735Z",
    },
  ],
  trashes: [
    {
      photo_url: "/sadf/asf.pngas",
      latitude: 36.391,
      longitude: 127.36,
      area: "충청북도",
      address: "충청북도",
      created_at: "2021-03-31T05:22:18.741735Z",
    },
  ],
};

const TrashStateContext = createContext<TrashState>({ ...trashInitialState });
const TrashDispatchContext = createContext<TrashDispatch | null>(null);

const reducer = (state: TrashState, action: TrashAction): TrashState => {
  switch (action.type) {
    case SET_TRASHES:
      return {
        ...state,
        trashes: action.payload,
      };
    case SET_TRASHCANS:
      return {
        ...state,
        trashCans: action.payload,
      };
    default:
      throw new Error("Unhandled action");
  }
};

export const MainProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...trashInitialState });

  return (
    <TrashStateContext.Provider value={state}>
      <TrashDispatchContext.Provider value={dispatch}>
        {children}
      </TrashDispatchContext.Provider>
    </TrashStateContext.Provider>
  );
};

export function useMainState() {
  const state = useContext(TrashStateContext);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function useMainDispatch() {
  const dispatch = useContext(TrashDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}

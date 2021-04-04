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
      latitude: 36.391,
      longitude: 127.36,
      area: "광주",
      address: "대전시",
      created_at: "2021-03-31T05:22:18.741735Z",
    },
  ],
  trashes: [
    {
      photo_url: "/sadf/asf.pngas",
      latitude: 36.391,
      longitude: 127.36,
      area: "전주",
      address: "서울시",
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

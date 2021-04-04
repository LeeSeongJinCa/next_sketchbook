export type ResLogin = {
  accessToken: string;
};

export type ResTrash = {
  photo_url: string;
  latitude: number;
  longitude: number;
  area: string;
  address: string;
  created_at: string;
};

export type ResTrashes = {
  trashes: ResTrash[];
};

export type ResTrashCans = {
  trashCans: ResTrash[];
};

export type Upload = {
  id: string;
  data: UploadData;
};

export type UploadData = {
  name: string;
  scope: string;
  version: string;
  match: UploadMatch;
};

export type UploadMatch = "major" | "minor" | "patch";

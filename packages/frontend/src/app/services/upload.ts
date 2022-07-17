import { api } from "./api";

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

const uploadApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUploads: build.query<Upload[], void>({
      query: () => "/uploads.json",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Upload" as const, id })),
              { type: "Upload", id: "LIST" },
            ]
          : [{ type: "Upload", id: "LIST" }],
    }),
    getUploadById: build.query<Upload, string>({
      query: (id) => "/upload.json",
      providesTags: (_result, _error, id) => [{ type: "Upload", id }],
    }),
    postNewUpload: build.mutation<Upload, UploadData>({
      query: (data) => ({
        url: "/upload.json",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Upload", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllUploadsQuery,
  useGetUploadByIdQuery,
  usePostNewUploadMutation,
} = uploadApi;

import { api } from "./api";

type UploadMatch = "major" | "minor" | "patch";

type UploadData = {
  name: string;
  scope: string;
  version: string;
  match: UploadMatch;
};

type Upload = {
  id: string;
  data: UploadData;
};

const uploadsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUploads: build.query<Upload[], void>({
      query: () => "/uploads.json",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Uploads" as const, id })),
              { type: "Uploads", id: "LIST" },
            ]
          : [{ type: "Uploads", id: "LIST" }],
    }),
    getUploadById: build.query<Upload, string>({
      query: (id) => "/upload.json",
      providesTags: (_result, _error, id) => [{ type: "Uploads", id }],
    }),
    postNewUpload: build.mutation<Upload, UploadData>({
      query: (data) => ({
        url: "/upload.json",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Uploads", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllUploadsQuery,
  useGetUploadByIdQuery,
  usePostNewUploadMutation,
} = uploadsApi;

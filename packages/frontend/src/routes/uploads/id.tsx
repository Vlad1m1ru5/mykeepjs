import { Navigate, useParams } from "react-router-dom";
import { useGetUploadByIdQuery } from "../../app/services/uploads";

const Upload = () => {
  const { id } = useParams<"id">();

  if (!id) {
    return <Navigate to="/404" />;
  }

  const { data: upload, error, isLoading } = useGetUploadByIdQuery(id);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error!</span>;
  }

  return (
    <>
      <p>{id}</p>
      <p>{JSON.stringify(upload)}</p>
    </>
  );
};

export default Upload;

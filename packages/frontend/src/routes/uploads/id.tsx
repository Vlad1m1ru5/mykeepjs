import { Navigate, useParams } from "react-router-dom";
import { useGetUploadByIdQuery } from "../../app/services/upload";
import UploadDashboard from "../../components/upload-dashboard/UploadDashboard";

const Upload = () => {
  const { id } = useParams<"id">();

  if (!id) {
    return <Navigate to="/404" />;
  }

  const { data: upload, error, isLoading } = useGetUploadByIdQuery(id);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error || !upload) {
    return <span>Error!</span>;
  }

  return <UploadDashboard upload={upload} />;
};

export default Upload;

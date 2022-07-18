import { Navigate, useParams } from "react-router-dom";
import UploadDashboard from "../../components/upload-dashboard/upload-dashboard";

const Upload = () => {
  const { id } = useParams<"id">();

  if (!id) {
    return <Navigate to="/404" />;
  }

  return <UploadDashboard id={id} />;
};

export default Upload;

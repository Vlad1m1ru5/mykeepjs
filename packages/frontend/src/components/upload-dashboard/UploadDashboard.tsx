import type { Upload } from "../../app/services/upload";

type UploadDashboardProps = {
  upload: Upload;
};

const UploadDashboard = ({ upload }: UploadDashboardProps) => {
  return <p>{JSON.stringify(upload)}</p>;
};

export default UploadDashboard;

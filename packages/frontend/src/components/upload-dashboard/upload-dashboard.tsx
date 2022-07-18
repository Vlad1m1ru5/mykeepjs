import { useGetUploadByIdQuery } from "../../app/services/upload";

interface UploadDashboardProps {
  id: string;
}

const UploadDashboard = ({ id }: UploadDashboardProps) => {
  const { data, error, isLoading } = useGetUploadByIdQuery(id);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error || !data) {
    return <span>Error!</span>;
  }

  return <code>{JSON.stringify(data)}</code>;
};

export default UploadDashboard;

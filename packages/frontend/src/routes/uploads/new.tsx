import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import NewUploadForm from "../../components/new-upload-form/new-upload-form";

const NewUpload = () => {
  const navigate = useNavigate();

  const handleFinish = async (id: string) => {
    navigate(`/uploads/${id}`);
  };

  return (
    <Card>
      <NewUploadForm onFinish={handleFinish} />
    </Card>
  );
};

export default NewUpload;

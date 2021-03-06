import { Alert, Button, Form, Input, Radio, Switch } from "antd";
import { useSearchParams } from "react-router-dom";
import type { UploadData } from "../../app/services/upload";
import { usePostNewUploadMutation } from "../../app/services/upload";

interface Values extends UploadData {
  url: string;
  advanced: boolean;
}

interface NewUploadFormProps {
  onFinish: (id: string) => void;
}

const { Item, useForm } = Form;
const { Group } = Radio;

const LABEL_COL = { span: 4 };
const WRAPPER_COL = { offset: 4 };
const MATCH_OPTIONS = [
  { label: "Major", value: "major" },
  { label: "Minor", value: "minor" },
  { label: "Patch", value: "patch" },
];

const NewUploadForm = ({ onFinish }: NewUploadFormProps) => {
  const [form] = useForm<Values>();

  const [postNewUpload, { error, isLoading }] = usePostNewUploadMutation();

  const handleFinish = async (uploadData: UploadData) => {
    const { id } = await postNewUpload(uploadData).unwrap();
    onFinish(id);
  };

  const message =
    error &&
    String(
      "message" in error
        ? error.message
        : "status" in error
        ? error.status
        : error
    );

  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");
  const name = searchParams.get("name");
  const scope = searchParams.get("scope");
  const version = searchParams.get("version");
  const advanced = searchParams.get("advanced") === "true";
  const match =
    MATCH_OPTIONS.find(({ value }) => value === searchParams.get("match")) ??
    "major";
  const initialValues = { match, advanced, name, scope, url, version };

  return (
    <Form
      name="new-upload"
      form={form}
      labelCol={LABEL_COL}
      initialValues={initialValues}
      disabled={isLoading}
      onFinish={handleFinish}
    >
      <Item name="advanced" label="Advanced" valuePropName="checked">
        <Switch />
      </Item>
      <Item noStyle dependencies={["advanced"]}>
        {({ getFieldValue }) =>
          getFieldValue("advanced") ? (
            <Item noStyle>
              <Item name="scope" label="Scope">
                <Input />
              </Item>
              <Item name="name" label="Name">
                <Input />
              </Item>
              <Item name="version" label="Version">
                <Input />
              </Item>
              <Item name="match" label="Match">
                <Group options={MATCH_OPTIONS} />
              </Item>
            </Item>
          ) : (
            <Item name="url" label="URL">
              <Input />
            </Item>
          )
        }
      </Item>
      {Boolean(message) && (
        <Item wrapperCol={WRAPPER_COL}>
          <Alert type="error" message={message} />
        </Item>
      )}
      <Item wrapperCol={WRAPPER_COL}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default NewUploadForm;

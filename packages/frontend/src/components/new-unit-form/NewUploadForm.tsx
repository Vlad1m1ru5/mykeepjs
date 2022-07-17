import { Alert, Button, Form, Input, Radio, Switch } from "antd";
import { useSearchParams } from "react-router-dom";
import type { UploadMatch } from "../../app/models/upload";
import { usePostNewUploadMutation } from "../../app/services/uploads";

type Values = {
  url: string;
  name: string;
  scope: string;
  version: string;
  advanced: boolean;
  match: UploadMatch;
};

interface NewUploadFormProps {
  onFinish: (id: string) => void;
}

const { Item, useForm } = Form;
const { Group } = Radio;

const labelCol = { span: 4 };
const wrapperCol = { offset: 4 };
const matchOptions = [
  { label: "Major", value: "major" },
  { label: "Minor", value: "minor" },
  { label: "Patch", value: "patch" },
];

const NewUploadForm = ({ onFinish }: NewUploadFormProps) => {
  const [form] = useForm<Values>();

  const [postNewUpload, { error, isLoading }] = usePostNewUploadMutation();
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
    matchOptions.find(({ value }) => value === searchParams.get("match")) ??
    "major";
  const initialValues = { match, advanced, name, scope, url, version };

  const handleFinish = async (values: Values) => {
    const { id } = await postNewUpload(values).unwrap();
    onFinish(id);
  };

  return (
    <Form
      name="new-upload"
      form={form}
      labelCol={labelCol}
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
                <Group options={matchOptions} />
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
        <Item wrapperCol={wrapperCol}>
          <Alert type="error" message={message} />
        </Item>
      )}
      <Item wrapperCol={wrapperCol}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default NewUploadForm;

import { Menu } from "antd";
import { useMatch, useNavigate } from "react-router-dom";

const GlobalNav = () => {
  const navigate = useNavigate();
  const match = useMatch("/*");
  const selectedKeys = match ? [match.pathname] : [];

  const onClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Menu
      selectedKeys={selectedKeys}
      items={[{ key: "/uploads/new", label: "New Upload", onClick }]}
    />
  );
};

export default GlobalNav;

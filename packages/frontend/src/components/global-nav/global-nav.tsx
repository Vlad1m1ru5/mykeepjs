import { Menu } from "antd";
import { useMatch, useNavigate } from "react-router-dom";

const MENU_ITEMS = [{ key: "/uploads/new", label: "New Upload" }];

const GlobalNav = () => {
  const navigate = useNavigate();
  const match = useMatch("/*");
  const selectedKeys = match ? [match.pathname] : [];

  const handleClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Menu
      items={MENU_ITEMS}
      selectedKeys={selectedKeys}
      onClick={handleClick}
    />
  );
};

export default GlobalNav;

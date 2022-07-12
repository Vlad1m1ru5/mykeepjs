import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const GlobalNav = () => {
  return (
    <Menu>
      <Menu.Item key="/uploads/new">
        <NavLink to="/uploads/new">New Upload</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default GlobalNav;

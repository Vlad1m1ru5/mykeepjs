import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./App.module.less";
import AppLogo from "./components/app-logo/AppLogo";
import GlobalNav from "./components/global-nav/GlobalNav";

const { Content, Sider } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light">
        <AppLogo />
        <GlobalNav />
      </Sider>
      <Content className={styles.appContent}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default App;

import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./App.module.less";
import AppLogo from "./components/app-logo/AppLogo";
import GlobalNav from "./components/global-nav/GlobalNav";

const App = () => {
  return (
    <Layout className={styles.app}>
      <Layout.Sider theme="light">
        <AppLogo />
        <GlobalNav />
      </Layout.Sider>
      <Layout.Content className={styles.appContent}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default App;

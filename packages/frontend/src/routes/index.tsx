import { Result } from "antd";
import HomeLink from "../components/home-link/HomeLink";
import HomeLogo from "../components/home-logo/HomLogo";

const Home = () => {
  return (
    <Result
      icon={<HomeLogo />}
      title="Hello Vite + React!"
      subTitle={
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      }
      extra={
        <p>
          <HomeLink href="https://reactjs.org">Learn React</HomeLink>
          {" | "}
          <HomeLink href="https://vitejs.dev/guide/features.html">
            Vite Docs
          </HomeLink>
        </p>
      }
    />
  );
};

export default Home;

import { Outlet } from "react-router-dom";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Layout>
      <div>
        <Outlet />
      </div>
    </Layout>
  );
};

export default App;

import "./App.css";
import Login from "./components/pageComponents/Login";
import Layout from "./components/layoutComponents/Layout";
import Dashboard from "./components/pageComponents/Dashboard";
import ScanDetail from "./components/pageComponents/ScanDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Layout>
        <Dashboard />
        <ScanDetail />        
      </Layout> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="scan" element={<ScanDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

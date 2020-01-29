import React from "react";
import AppLayout from "./containers/AppLayout/AppLayout";
import Layout from "./hoc/Layout/Layout";
function App() {
  return (
    <div>
      <Layout>
        <AppLayout />
      </Layout>
    </div>
  );
}

export default App;

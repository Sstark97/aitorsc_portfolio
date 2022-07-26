import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Layout from "@containers/Layout";

import Home from "@pages/Home";
import Skills from "@pages/Skills";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
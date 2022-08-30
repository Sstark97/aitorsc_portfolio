import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTER } from "../const";
import LoadingSpinner from "@components/LoadingSpinner";
import Layout from "@containers/Layout";
import { AppProvider } from "@context/AppProvider";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <HelmetProvider>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {ROUTER.map( route=> (
                <Route key={route.route} path={route.route} element={<route.element />}/>
              ))}
            </Routes>
          </Suspense>
        </Layout>
        </HelmetProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;

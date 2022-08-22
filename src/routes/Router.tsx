import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "@components/LoadingSpinner";
import Layout from "@containers/Layout";
import { AppProvider } from "@containers/AppProvider";

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
        <AppProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </AppProvider>
    </Suspense>
  );
};

const Home = lazy(() => import("@pages/Home"));
const Contact = lazy(() => import("@pages/Contact"));
const Projects = lazy(() => import("@pages/Projects"));
const Skills = lazy(() => import("@pages/Skills"));

export default App;

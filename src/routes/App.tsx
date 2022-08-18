import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "@components/LoadingSpinner";
import Layout from "@containers/Layout";
import { AppProvider } from "@containers/AppProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/skills"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Skills />
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Contact />
                </Suspense>
              }
            />
          </Routes>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
};

const Home = lazy(() => import("@pages/Home"));
const Contact = lazy(() => import("@pages/Contact"));
const Projects = lazy(() => import("@pages/Projects"));
const Skills = lazy(() => import("@pages/Skills"));

export default App;


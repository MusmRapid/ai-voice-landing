import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import ScrollTop from "./components/ScrollToTop/ScrollTop";
import routes from "./routes";
import Loader from "./components/Loader";

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Suspense fallback={<Loader/>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
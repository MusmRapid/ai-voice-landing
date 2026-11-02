import { Suspense, useEffect, useRef } from "react";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import ScrollTop from "./components/ScrollToTop/ScrollTop";
import routes from "./routes";
import Loader from "./components/Loader";

function AppRoutes() {
  return useRoutes(routes);
}

function MetaPixelPageView() {
  const { pathname, search } = useLocation();
  const previousPage = useRef(`${pathname}${search}`);

  useEffect(() => {
    const currentPage = `${pathname}${search}`;
    if (previousPage.current === currentPage) return;

    previousPage.current = currentPage;
    window.fbq?.("track", "PageView");
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <MetaPixelPageView />
      <Suspense fallback={<Loader/>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
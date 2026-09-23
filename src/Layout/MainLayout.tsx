import React from "react";
import { Outlet } from "react-router-dom";
import { useAtom } from "jotai/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { themeAtom } from "../atom/themeAtom";

const MainLayout: React.FC = () => {
  const [theme] = useAtom(themeAtom);

  return (
    <div className={`home-page ${theme === "dark" ? "dark-mode" : "light-mode"} transition-colors duration-500`}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
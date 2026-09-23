import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const BecomePartner = lazy(() => import("./pages/BecomePartner"));

const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const AcceptableUsePolicy = lazy(() => import("./pages/AcceptableUsePolicy"));
const ResponsibleAIPolicy = lazy(() => import("./pages/ResponsibleAIPolicy"));

  const routes: RouteObject[] = [
    {
        path: "/",
        element: (<MainLayout />),
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    },
    {
        path: "/partnerprogram",
        element: (<MainLayout />),
        children: [
            {
                index: true,
                element: <BecomePartner />,
            }
        ]
    },

    { path: "/terms-of-service", element: <TermsOfService/> },
    { path: "/privacy-policy", element: <PrivacyPolicy/> },
    { path: "/acceptable-use-policy", element: <AcceptableUsePolicy/> },
    { path: "/responsible-ai-policy", element: <ResponsibleAIPolicy/> },
  ]

  export default routes;
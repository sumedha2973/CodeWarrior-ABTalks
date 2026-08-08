import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import ChallengeDayPage from "../pages/ChallengeDayPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <div className="p-8 text-center text-red-400">
        <h2 className="text-xl font-bold">Route Error</h2>
        <p className="text-sm">Something went wrong rendering this page.</p>
      </div>
    ),
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "day/12",
        element: <ChallengeDayPage />,
      },
    ],
  },
]);
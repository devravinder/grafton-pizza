import PageLoader from "components/PageLoader";
import MainLayout from "layout/MainLayout";
import { ElementType, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

const EMPTY_PATH = "";
const ANY_MATCH = "*";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: EMPTY_PATH,
          element: <HomePage />,
        },
      ],
    },
    {
      path: ANY_MATCH,
      element: <Navigate to={"/"} replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}

const HomePage = Loadable(lazy(() => import("pages/home/HomePage")));

import { PUBLIC_PATH } from "@/constants";
import { DemoPage } from "@/features/demo/components";
import { HomePage } from "@/features/home/components/HomePage";
import { MovieDetailPage } from "@/features/movieDetail/components/MovieDetailPage";
import { SignUpPage } from "@/features/signUp/components/SignUpPage";
import { AppLayout } from "@/layouts/AppLayout";
import { SignInPage } from "@/features/signIn/components/SignInPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  // mỗi object là một route <Route/>
  {
    element: <AppLayout />,

    // nested route
    children: [
      // home route
      {
        path: PUBLIC_PATH.HOME,
        element: <HomePage />,
      },
      {
        path: PUBLIC_PATH.MOVIE_DETAIL_PATTERN,
        element: <MovieDetailPage />,
      },
      {
        path: PUBLIC_PATH.SIGN_UP,
        element: <SignUpPage />,
      },

      {
        path: PUBLIC_PATH.SIGN_IN,
        element: <SignInPage />,
      },
    ],
  },
  {
    path: "/demo",
    element: <DemoPage />,
  },
]);
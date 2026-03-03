import { createBrowserRouter } from "react-router";
import { Posts } from "@/pages/posts/Posts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
]);

export default router;

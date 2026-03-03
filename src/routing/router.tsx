import { createBrowserRouter } from "react-router";
import { Posts } from "@/pages/posts/Posts";
import { User } from "@/pages/user/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/user/:userId",
    element: <User />,
  },
]);

export default router;

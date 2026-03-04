import { createBrowserRouter } from "react-router";
import { Posts } from "@/pages/posts/Posts";
import { User } from "@/pages/user/User";
import { Post } from "@/pages/post/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/user/:userId",
    element: <User />,
  },
  {
    path: "/post/:postId",
    element: <Post />,
  },
]);

export default router;

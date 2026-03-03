import { useQuery } from "@tanstack/react-query";
import type { Post } from "../../interfaces/post.interface";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok || response.status !== 200)
    throw new Error("Network response was not ok");
  return response.json();
};

const useGetPost = () => {
  const { data, isLoading, isError } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return { data, isLoading, isError };
};

export default useGetPost;

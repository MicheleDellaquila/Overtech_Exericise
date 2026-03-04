import { useQuery } from "@tanstack/react-query";
import type { Post } from "@/interfaces/post.interface";

const fetchPost = async (postId: string): Promise<Post> => {
  const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  const response = await fetch(URL);
  if (!response.ok || response.status !== 200)
    throw new Error("Network response was not ok");
  return response.json();
};

const useGetPost = (postId: string | undefined) => {
  const { data, isLoading, isError } = useQuery<Post>({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId!),
    enabled: !!postId,
  });

  return { data, isLoading, isError };
};

export default useGetPost;

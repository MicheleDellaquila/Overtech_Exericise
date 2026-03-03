import { useMemo } from "react";
import type { Post } from "@/interfaces/post.interface";
import type { User } from "@/interfaces/user.interface";

const useFilteredPosts = (
  posts: Post[] | undefined,
  usersMap: Map<number, User>,
  searchTerm: string,
) => {
  return useMemo(() => {
    if (!posts) return [];

    const normalizedTerm = searchTerm.trim().toLowerCase();
    if (!normalizedTerm) return posts;

    return posts.filter((post) => {
      const user = usersMap.get(post.userId);

      const titleMatch = post.title.toLowerCase().includes(normalizedTerm);
      const usernameMatch = user?.username
        .toLowerCase()
        .includes(normalizedTerm);

      return titleMatch || usernameMatch;
    });
  }, [posts, usersMap, searchTerm]);
};

export default useFilteredPosts;

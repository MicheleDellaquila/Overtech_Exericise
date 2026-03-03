import { useQuery } from "@tanstack/react-query";
import type { User } from "@/interfaces/user.interface";

const fetchUser = async (userId: string): Promise<User> => {
  const URL = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const response = await fetch(URL);
  if (!response.ok || response.status !== 200)
    throw new Error("Network response was not ok");
  return response.json();
};

const useGetUser = (userId: string | undefined) => {
  const { data, isLoading, isError } = useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId!),
    enabled: !!userId,
  });

  return { data, isLoading, isError };
};

export default useGetUser;

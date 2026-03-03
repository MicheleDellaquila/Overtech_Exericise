import { useQuery } from "@tanstack/react-query";
import type { User } from "@/interfaces/user.interface";

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok || response.status !== 200)
    throw new Error("Network response was not ok");
  return response.json();
};

const useGetUsers = (enabled: boolean) => {
  const { data, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    enabled,
  });

  return { data, isLoading };
};

export default useGetUsers;

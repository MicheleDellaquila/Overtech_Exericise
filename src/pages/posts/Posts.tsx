import { useMemo, useState } from "react";
import { Loading } from "@/components/ui/Loading";
import { Header } from "@/pages/posts/Header";
import { PostItem } from "./PostItem";
import useGetPosts from "./hooks/useGetPosts";
import useGetUsers from "./hooks/useGetUsers";
import type { User } from "@/interfaces/user.interface";
import { ErrorMessage } from "@/containers/ErrorMessage";
import { SearchBar } from "@/pages/posts/SearchBar";
import useFilteredPosts from "./hooks/useFilteredPosts";

export function Posts() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError } = useGetPosts();
  const { data: usersData, isLoading: isUsersLoading } = useGetUsers(!!data);

  const usersMap = useMemo(() => {
    if (!usersData) return new Map<number, User>();
    return new Map(usersData.map((u) => [u.id, u]));
  }, [usersData]);

  const filteredPosts = useFilteredPosts(data, usersMap, searchTerm);

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (isError) return <ErrorMessage text="Errore caricamento posts." />;
    if (!data || data.length === 0)
      return <p className="text-muted">Nessun articolo trovato.</p>;

    return filteredPosts.map((post) => {
      const user = usersMap.get(post.userId);
      return (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          userId={post.userId}
          name={user?.name ?? "Unknown"}
          username={user?.username ?? "Anonymous"}
          isUsersLoading={isUsersLoading}
        />
      );
    });
  };

  return (
    <main className="container px-4 md:px-0">
      <Header />
      <section className="w-full max-w-3xl mx-auto pt-12">
        <h2 className="ff-heading text-muted py-4 uppercase tracking-wider">
          Ultimi articoli
        </h2>
        <section className="pt-6">
          <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
          <div className="mt-4">{renderContent()}</div>
        </section>
      </section>
    </main>
  );
}

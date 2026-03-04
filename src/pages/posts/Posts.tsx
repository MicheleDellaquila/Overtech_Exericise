import { useMemo, useState } from "react";
import { Loading } from "@/components/ui/Loading";
import { Header } from "@/pages/posts/Header";
import { ListPostItem } from "./ListPostItem";
import useGetPosts from "./hooks/useGetPosts";
import useGetUsers from "./hooks/useGetUsers";
import type { User } from "@/interfaces/user.interface";
import { ErrorMessage } from "@/containers/ErrorMessage";
import { SearchBar } from "@/pages/posts/SearchBar";
import useFilteredPosts from "./hooks/useFilteredPosts";
import { DisplayMode } from "./DisplayMode";
import { CardsPostItem } from "./CardsPostItem";
import useSharedPreferences from "@/store/useSharedPreferences";

export function Posts() {
  const [searchTerm, setSearchTerm] = useState("");
  const layoutView = useSharedPreferences((state) => state.layoutView);
  const { data, isLoading, isError } = useGetPosts();
  const { data: usersData, isLoading: isUsersLoading } = useGetUsers(!!data);

  const usersMap = useMemo(() => {
    if (!usersData) return new Map<number, User>();
    return new Map(usersData.map((u) => [u.id, u]));
  }, [usersData]);

  const filteredPosts = useFilteredPosts(data, usersMap, searchTerm);
  const sectionLayoutStyle = layoutView === "list" ? "max-w-3xl" : "max-w-5xl";
  const PostComponent = layoutView === "list" ? ListPostItem : CardsPostItem;
  const PostWrapperClass =
    layoutView === "list"
      ? "mt-4"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4";

  return (
    <main className="container px-4 md:px-0">
      <Header />
      <section
        className={`w-full mx-auto pt-12 transition-all ${sectionLayoutStyle}`}
      >
        <h2 className="ff-heading text-muted py-4 uppercase tracking-wider">
          Ultimi articoli
        </h2>
        <section className="pt-6">
          <div className="flex items-center justify-between gap-x-2">
            <SearchBar
              className="block w-96"
              searchTerm={searchTerm}
              onChange={setSearchTerm}
            />
            <DisplayMode />
          </div>
          {isLoading && <Loading />}
          {isError && <ErrorMessage text="Errore caricamento posts." />}
          {data?.length === 0 && (
            <p className="text-muted">Nessun articolo trovato.</p>
          )}
          <div className={PostWrapperClass}>
            {filteredPosts.map((post) => {
              const user = usersMap.get(post.userId);

              return (
                <PostComponent
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  userId={post.userId}
                  name={user?.name ?? "Unknown"}
                  username={user?.username ?? "Anonymous"}
                  isUsersLoading={isUsersLoading}
                />
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

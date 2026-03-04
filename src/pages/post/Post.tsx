import { useParams } from "react-router-dom";
import { ErrorMessage } from "@/containers/ErrorMessage";
import { GoBack } from "@/containers/GoBack";
import useGetPost from "./useGetPost";
import useGetUser from "@/hook/useGetUser";
import { UserProfile } from "@/components/UserProfile";
import { PageLoading } from "@/containers/PageLoading";

export function Post() {
  const { postId } = useParams();
  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
  } = useGetPost(postId);
  const { data: user, isLoading: isUserLoading } = useGetUser(post?.userId);

  if (isPostLoading) return <PageLoading />;
  if (isPostError || !post)
    return (
      <div className="flex items-center justify-center h-screen">
        <ErrorMessage text="Errore nel caricamento del post." />
      </div>
    );

  return (
    <main className="container px-4 md:px-0">
      <section className="w-full max-w-3xl mx-auto py-12 px-4 lg:px-0">
        <div className="mb-12">
          <GoBack />
        </div>
        <UserProfile
          name={user?.name ?? "Utente sconosciuto"}
          username={user?.username ?? "anonimo"}
          isLoading={isUserLoading}
        />
        <article className="flex flex-col gap-6">
          <h1 className="ff-heading text-[2.25rem] leading-tight text-main font-semibold">
            {post.title}
          </h1>
          <p className="text-main/80 text-base leading-relaxed">{post.body}</p>
        </article>
      </section>
    </main>
  );
}

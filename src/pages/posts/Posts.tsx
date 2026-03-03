import { Loading } from "../../components/ui/loading";
import { Header } from "../../containers/header";
import { PostItem } from "./PostItem";
import useGetPost from "./useGetPosts";

export function Posts() {
  const { data, isLoading, isError } = useGetPost();
  const posts =
    data &&
    data.length > 0 &&
    data.map((post) => <PostItem key={post.id} {...post} />);

  return (
    <main className="container px-4 md:px-0">
      <Header />
      <section className="w-full max-w-3xl mx-auto pt-12">
        <h2 className="ff-heading text-muted py-4 uppercase tracking-wider">
          Ultimi articoli
        </h2>
        {isLoading ? <Loading /> : posts}
        {isError && (
          <p className="text-red-600">Errore nel caricamento dei post.</p>
        )}
      </section>
    </main>
  );
}

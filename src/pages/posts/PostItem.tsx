import type { Post } from "../../interfaces/post.interface";

type PostItemProps = Pick<Post, "title" | "body">;
export function PostItem({ title, body }: PostItemProps) {
  return (
    <article className="flex gap-8 items-center py-8 border-b border-border/30 cursor-pointer no-underline text-inherit">
      <div className="shrink-0 w-12.5 h-12.5 bg-red-600 " />
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-[2rem] leading-none mb-2 text-main font-semibold">
          {title}
        </h2>
        <p className="text-base text-muted line-clamp-2">{body}</p>
      </div>
    </article>
  );
}

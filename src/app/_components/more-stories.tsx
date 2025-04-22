import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import CoverImage from "./cover-image";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Katalog
        </h2>
        <Link
          href={"/katalog"}
          className="font-bold hover:cursor-pointer hover:text-slate-400"
        >
          Lebih banyak
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <div className="mb-5">
            {/* <CoverImage
              slug={post.slug}
              title={post.title || ""}
              src={post.coverImage}
            /> */}
            <Image
              src={post.coverImage}
              alt={`Cover Image for ${post.title || ""}`}
              // className={cn("shadow-sm w-full", {
              //   "hover:shadow-lg transition-shadow duration-200": slug,
              // })}
              className="mr-2 w-full h-auto md:w-auto md:h-full rounded-lg"
              width={1300}
              height={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

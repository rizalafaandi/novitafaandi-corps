import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={"Novita Afaandi"}
          coverImage={heroPost.coverImage}
          subtitle="Est. 2022"
          author={{ picture: heroPost.author.picture, name: "Linda Novita" }}
          slug={"heroPost.slug"}
          excerpt={
            "Kami tidak hanya memberikan riasan yang memukau, tetapi juga pengalaman layanan yang ramah, nyaman, dan memuaskan."
          }
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}

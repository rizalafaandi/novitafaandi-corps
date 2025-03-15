import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Navbar from "@/app/_components/navbar";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Navbar />
        <HeroPost
          title={
            '"Anggun, Elegan, Berkelas – Kebaya Impian untuk Setiap Momen Spesial! ✨"'
          }
          coverImage={"/assets/icons/logo/hero_icon.jpeg"}
          subtitle="by CERIVI Attire - Est. 2024"
          author={{ picture: heroPost.author.picture, name: "Linda Novita" }}
          slug={"heroPost.slug"}
          excerpt={
            "Tampilkan pesona dan keanggunan dalam balutan kebaya eksklusif kami. Dari desain klasik hingga modern, sempurna untuk wisuda, lamaran, hingga pernikahan. Temukan kebaya terbaik untuk mencerminkan kecantikan dan kepribadian Anda! 💖✨"
          }
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}

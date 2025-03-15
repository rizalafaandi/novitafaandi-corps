import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Navbar from "@/app/_components/navbar";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = [
    {
      coverImage: `/assets/images/catalogue/catalogue_1.jpeg`,
      title: "catalogue_1",
    },
    {
      coverImage: `/assets/images/catalogue/catalogue_2.jpeg`,
      title: "catalogue_2",
    },
    {
      coverImage: `/assets/images/catalogue/catalogue_3.jpeg`,
      title: "catalogue_3",
    },
  ];

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
          slug={"heroPost.slug"}
          excerpt={
            "Tampilkan pesona dan keanggunan dalam balutan kebaya eksklusif kami. Dari desain klasik hingga modern, sempurna untuk wisuda, lamaran, hingga pernikahan. Temukan kebaya terbaik untuk mencerminkan kecantikan dan kepribadian Anda! 💖✨"
          }
        />
        <MoreStories posts={morePosts} />
      </Container>
    </main>
  );
}

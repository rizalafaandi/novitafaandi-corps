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
        {/* <Intro /> */}
        {/* <div className="relative w-full h-80 items-center flex justify-center gap-x-10 mb-10">
          <Image
            src={"/assets/images/hero_image.jpeg"}
            alt={`Cover Image for`}
            // className={cn("shadow-sm w-full", {
            //   "hover:shadow-lg transition-shadow duration-200": slug,
            // })}
            className="mr-2 w-10 h-10 md:w-60 md:h-full"
            width={1300}
            height={100}
          />
          <Image
            src={"/assets/icons/logo/hero_icon.jpeg"}
            alt={`Cover Image for`}
            // className={cn("shadow-sm w-full", {
            //   "hover:shadow-lg transition-shadow duration-200": slug,
            // })}
            className="mr-2 w-10 h-10 md:w-auto md:h-full"
            width={1300}
            height={100}
          />
          <Image
            src={"/assets/images/hero_image2.jpeg"}
            alt={`Cover Image for`}
            // className={cn("shadow-sm w-full", {
            //   "hover:shadow-lg transition-shadow duration-200": slug,
            // })}
            className="mr-2 w-10 h-10 md:w-60 md:h-full"
            width={1300}
            height={100}
          />
        </div> */}
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

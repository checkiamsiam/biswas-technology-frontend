import Head from "next/head";
import CyberSecurity from "../components/Home/CyberSecurity";
import HomeBlog from "../components/Home/Blog";
import HomeAbout from "../components/Home/HomeAbout";
import HomeBanner from "../components/Home/HomeBanner";
import HomeContact from "../components/Home/HomeContact";
import Reviews from "../components/Home/Reviews";
import Services from "../components/Home/Services";
import OurApproach from "../components/Home/OurApproach";

export default function Home() {
  return (
    <>
      <Head>
        <title>Biswas Technology</title>
        <meta name="description" content="home page of biswas technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeBanner />
      <Services />
      <HomeAbout />
      <HomeContact />
      <CyberSecurity/>
      <HomeBlog />
      <Reviews />
      <OurApproach/>
    </>
  );
}

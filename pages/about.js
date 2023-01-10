import Head from "next/head";
import PageBanner from "../components/common/PageBanner";
import CyberSecurity from "../components/Home/CyberSecurity";
import HomeAbout from "../components/Home/HomeAbout";

export default function About() {
  return (
    <>
      <Head>
        <title>About ~ Biswas Technology</title>
        <meta name="description" content="about page of biswas technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageBanner title="About Us" path="About Us" />
      <HomeAbout />
      <CyberSecurity />
    </>
  );
}

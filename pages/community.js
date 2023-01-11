import Head from "next/head";
import PageBanner from "../components/common/PageBanner";
import OurTeam from "../components/Community/OurTeam";

export default function CommunityPage() {
  return (
    <>
      <Head>
        <title>Community ~ Biswas Technology</title>
        <meta name="description" content="about page of biswas technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageBanner title="Our Team" path="Community" />
      <OurTeam/>
    </>
  );
}

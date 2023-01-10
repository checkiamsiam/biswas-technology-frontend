import Head from "next/head";
import PageBanner from "../components/common/PageBanner";
import HomeContact from "../components/Home/HomeContact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact us ~ Biswas Technology</title>
        <meta name="description" content="about page of biswas technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageBanner title="Contact Us" path="Contact" />
      <HomeContact />
    </>
  );
}

import Head from "next/head";
import PageBanner from "../components/common/PageBanner";
import OurApproach from "../components/Home/OurApproach";
import Services from "../components/Home/Services";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services ~ Biswas Technology</title>
        <meta name="description" content="about page of biswas technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageBanner title="Services" path="Services" />
      <Services />
      <OurApproach />
    </>
  );
}

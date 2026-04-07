import { type ReactElement } from "react";
import Head from "next/head";
import V2Layout from "@v2/layout";
import AboutView from "@v2/views/about-view";

function V2AboutPage() {
  return (
    <>
      <Head>
        <title>About Bruno — Senior Software Engineer</title>
        <meta name="description" content="Learn more about Bruno Guimarães da Silva, his career, hobbies, and educational background." />
      </Head>
      <AboutView />
    </>
  );
}

V2AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <V2Layout>{page}</V2Layout>;
};

export default V2AboutPage;

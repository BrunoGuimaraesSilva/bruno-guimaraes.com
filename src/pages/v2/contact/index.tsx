import { type ReactElement } from "react";
import Head from "next/head";
import V2Layout from "@v2/layout";
import ContactView from "@v2/views/contact-view";

function V2ContactPage() {
  return (
    <>
      <Head>
        <title>Bruno Guimarães — Contact</title>
        <meta
          name="description"
          content="Get in touch with Bruno Guimarães — Senior Full-Stack Software Engineer open to remote opportunities, international projects and collaboration."
        />
      </Head>
      <ContactView />
    </>
  );
}

V2ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <V2Layout>{page}</V2Layout>;
};

export default V2ContactPage;

import { type ReactElement } from "react";
import Head from "next/head";
import V2Layout from "@v2/layout";
import ResumeView from "@v2/views/resume-view";

function V2ResumePage() {
  return (
    <>
      <Head>
        <title>Bruno Guimarães — Résumé</title>
        <meta
          name="description"
          content="Résumé of Bruno Guimarães — Senior Full-Stack Software Engineer with 6+ years of experience in distributed systems, event-driven architectures, and scalable platforms."
        />
      </Head>
      <ResumeView />
    </>
  );
}

V2ResumePage.getLayout = function getLayout(page: ReactElement) {
  return <V2Layout>{page}</V2Layout>;
};

export default V2ResumePage;

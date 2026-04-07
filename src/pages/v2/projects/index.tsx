import { type ReactElement } from "react";
import Head from "next/head";
import V2Layout from "@v2/layout";
import ProjectsView from "@v2/views/projects-view";

function V2ProjectsPage() {
  return (
    <>
      <Head>
        <title>Bruno Guimarães — Projects</title>
        <meta
          name="description"
          content="Portfolio projects by Bruno Guimarães — enterprise platforms, microservices, and open-source tooling."
        />
      </Head>
      <ProjectsView />
    </>
  );
}

V2ProjectsPage.getLayout = function getLayout(page: ReactElement) {
  return <V2Layout>{page}</V2Layout>;
};

export default V2ProjectsPage;

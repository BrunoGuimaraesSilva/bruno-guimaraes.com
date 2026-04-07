import Head from "next/head";

interface DefaultSeoProps {
  title: string;
}

export default function DefaultSeo({ title }: DefaultSeoProps) {
  return (
    <Head>
      <title>{`${title} | Bruno Guimarães`}</title>
      <meta
        name="description"
        content="Portfolio of Bruno Guimarães – Full-Stack Developer specialized in PHP, TypeScript, and a passionate Go learner."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://bruno-guimaraes.com" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph (WhatsApp, Facebook, LinkedIn) */}
      <meta property="og:title" content="Bruno Guimarães" />
      <meta
        property="og:description"
        content="Full-Stack Developer with expertise in TypeScript, PHP and a growing love for Go. Explore my portfolio and projects."
      />
      <meta
        property="og:image"
        content="https://homolog.bruno-guimaraes.com/assets/preview.png"
      />
      <meta property="og:url" content="https://bruno-guimaraes.com" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Bruno Guimarães" />
      <meta
        name="twitter:description"
        content="Explore the work of Bruno Guimarães – Full-Stack Developer focused on TypeScript, PHP, and learning Go."
      />
      <meta
        name="twitter:image"
        content="https://homolog.bruno-guimaraes.com/assets/preview.png"
      />
    </Head>
  );
}

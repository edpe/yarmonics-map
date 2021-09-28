import dynamic from "next/dynamic";
import Head from "next/head";

function HomePage() {
  const Map = dynamic(() => import("../src/components/Map"), {
    loading: () => <p>Loading</p>,
    ssr: false,
  });
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <Map />
    </div>
  );
}

export default HomePage;

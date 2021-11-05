import Link from "next/link";
import Layout from "../src/components/Layout";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.centerInPage}>
        <div className={styles.title}>Map of Festival Performances</div>

        <Link href="/map-page" passHref>
          <a>
            <img
              className={styles.circleImage}
              src="/map-sea.png"
              alt="Yarmonics performance map"
            />
          </a>
        </Link>

        <p className={styles.text}>
          This map contains a growing collection of recordings from performances
          at Yarmonics festivals. Each red marker represents a venue or site,
          click that marker to show all recordings from that venue or site.
          Recordings are streamed via the Soundcloud player which can be played
          within the map.
        </p>

        <p className={styles.text}>
          The map can be used whilst visiting the sites in situ, or from
          wherever else you may be.
        </p>

        <div className={styles.linkWrapper}>
          <Link href="/map-page">View map</Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

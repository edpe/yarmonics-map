import Link from "next/link";
import Image from "next/image";
import Layout from "../src/components/Layout";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <Layout footer>
      <div className={styles.centerInPage}>
        <div className={styles.title}>Map of Festival Performances</div>
        <Link href="/map-page" passHref>
          <a className={styles.previewImage}>
            <Image
              width={200}
              height={200}
              layout="responsive"
              src="/map-yarmouth.png"
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

      <ul className={styles.sponsorLogos}>
        <li className={styles.sponsorLogoVisitGreatYarmouth}>
          <Image
            src="/visit-great-yarmouth.jpg"
            layout="responsive"
            width={3500}
            height={1200}
            alt="Visit Great Yarmouth logo"
          />
        </li>

        <li className={styles.sponsorLogoEasternEar}>
          <Image
            src="/eastern-ear.jpg"
            layout="responsive"
            width={2048}
            height={2048}
            alt="Eastern ear logo"
          />
        </li>
        <li className={styles.sponsorLogoOriginalProjects}>
          <Image
            src="/originalprojects.jpg"
            layout="responsive"
            width={885}
            height={349}
            alt="Original projects logo"
          />
        </li>
        <li className={styles.sponsorLogoRanworth}>
          <Image
            src="/ranworth.png"
            layout="responsive"
            width={1588}
            height={408}
            alt="Ranworth trust logo"
          />
        </li>
      </ul>
      <p className={styles.text}>
        {
          "This map has been made possible with funding from Great Yarmouth Tourism & Business Improvement Area"
        }
      </p>
    </Layout>
  );
};

export default HomePage;

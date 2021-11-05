import styled from "styled-components";
import Link from "next/link";
import Layout from "../src/components/Layout";

const CenterInPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  flex: 1 1 auto;

  @media (min-width: 600px) {
    justify-content: space-between;
    height: 60vh;
    padding: 40px 300px;
  }
`;

const Title = styled.h1`
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: #413c3e;
`;

const CircleImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
  cursor: pointer;

  @media (min-width: 600px) {
    width: 250px;
    height: 250px;
`;

const Text = styled.p`
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  text-align: center;
  color: #413c3e;
  line-height: 1.5;
`;

const LinkWrapper = styled.div`
  border: 2px solid #413c3e;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  position: relative;

  a {
    text-decoration: none;
    font-family: "Helvetica Neue", Arial, sans-serif;
    color: #413c3e;

    &:hover {
      color: #000;
    }
    transition: color 0.2s;
  }

  &:hover {
    background-color: #add8e6;
  }

  transition: background-color 0.2s;
`;

const HomePage = () => {
  return (
    <Layout>
      <CenterInPage>
        <Title>Map of Festival Performances</Title>

        <Link href="/map" passHref>
          <a>
            <CircleImage src="/map-sea.png" alt="map of yarmouth" />
          </a>
        </Link>

        <Text>
          This map contains a growing collection of recordings from performances
          at Yarmonics festivals. Each red marker represents a venue or site,
          click that marker to show all recordings from that venue or site.
          Recordings are streamed via the Soundcloud player which can be played
          within the map.
        </Text>
        <Text>
          The map can be used whilst visiting the sites in situ, or from
          wherever else you may be.
        </Text>

        <LinkWrapper>
          <Link href="/map">View map</Link>
        </LinkWrapper>
      </CenterInPage>
    </Layout>
  );
};

export default HomePage;

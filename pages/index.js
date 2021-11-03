import styled from "styled-components";
import Link from "next/link";
import Layout from "../src/components/Layout";

const CenterInPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  flex: 1 1 auto;

  @media (min-width: 600px) {
    justify-content: space-between;
    height: 60vh;
    padding: 60px 300px;
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

  @media (min-width: 600px) {
    width: 250px;
    height: 250px;
`;

const Text = styled.p`
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  text-align: center;
  color: #413c3e;
`;

const LinkWrapper = styled.div`
  border: 2px solid #413c3e;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  position: relative;

  a {
    text-decoration: none;
    font-family: "Helvetica Neue", Arial, sans-serif;
    color: #413c3e;
  }

  &:hover {
    border: 4px solid #413c3e;
    margin: -2px 0;
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <CenterInPage>
        <Title>Map of Festival Performances</Title>
        <CircleImage src="/map-sea.png" alt="map of yarmouth" />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <LinkWrapper>
          <Link href="/map">View map</Link>
        </LinkWrapper>
      </CenterInPage>
    </Layout>
  );
};

export default HomePage;

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Header = styled.div`
  width: 100%;
  height: 75.14px;

  @media (min-width: 600px) {
    height: 125px;
  }
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 14px rgb(0 0 0 / 40%);
`;

const LogoWrapper = styled.div`
  height: 43.14px;
  width: 153px;
  cursor: pointer;
  @media (min-width: 600px) {
    width: 234px;
    height: 65.42px;
    margin-right: 14px;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const Footer = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
    height: 80px;
    width: 100%;
    background-color: #1b1c1d;
    position: sticky;
    box-shadow: 0 3px 14px rgb(0 0 0 / 40%);
  }
`;

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header>
        <Link href="https://www.yarmonics.com/" passHref>
          <LogoWrapper>
            <Image
              src={"/yarmonicsLogo.jpg"}
              alt="Yarmonics logo"
              width={234}
              height={65.42}
            />
          </LogoWrapper>
        </Link>
      </Header>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default Layout;

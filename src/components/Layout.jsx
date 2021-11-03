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
  width: 100%;
  height: 50px;
  background-color: #1b1c1d;
  position: sticky;
  box-shadow: 0 3px 14px rgb(0 0 0 / 40%);

  @media (min-width: 600px) {
    height: 80px;
  }
`;

const Back = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  margin: 25px 15px;

  cursor: pointer;

  @media (min-width: 600px) {
    align-items: center;
    margin: 15px;

    transition: margin-left 0.2s ease-in-out;

    &: hover {
      margin-left: 12px;
    }
  }
`;

const NavText = styled.h3`
display: none;

&: hover {
  text-decoration: underline;
}

@media (min-width: 600px) {
  display: block;
  margin-left: 10px;
  color: #413c3e;
  font-size: 14px;
  font-family: "Helvetica Neue", Arial, sans-serif;
`;

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header>
        <Link href="https://www.yarmonics.com/" passHref>
          <Back>
            <Image src={"/back.svg"} alt="home page" width={24} height={24} />
            <NavText>back</NavText>
          </Back>
        </Link>
        <LogoWrapper>
          <Image
            src={"/yarmonicsLogo.jpg"}
            alt="Yarmonics logo"
            width={234}
            height={65.42}
          />
        </LogoWrapper>
      </Header>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default Layout;

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import ReactPlayer from "react-player/soundcloud";
import { SpinnerRoundOutlined } from "spinners-react";

const StyledPop = styled(Popup)`
  .leaflet-popup-content-wrapper {
    border-radius: 0;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }

  .leaflet-popup-content.leaflet-popup-scrolled {
    margin: 0 !important;
  }

  .leaflet-popup-content {
    margin: 0 !important;
    padding: 0 19px !important;
    width: 96vw !important;

    @media (min-width: 600px) {
      width: 50vw !important;
    }
    overflow-x: hidden;
  }

  .leaflet-popup-close-button {
    margin: 15px 10px !important;
    font-size: 30px !important;
    color: #fff !important;
    background: transparent !important;
    padding: 6px 1px !important;
    width: 30px !important;
    height: 30px !important;
    z-index: 20;
    position: sticky;
    top: -15px;
    @media (min-width: 600px) {
      right: 15px !important;
    }
  }

  .leaflet-popup-scrolled {
    border: none;
  }

  .leaflet-popup-content-wrapper {
    padding: 0 !important;
  }
`;

const ArtistTitle = styled.h3`
  margin-top: 30px;
`;

const icon = new Icon({
  iconUrl: "/mapPin.svg",
  iconSize: [23, 32],
});

const Header = styled.div`
  width: 100%;
  height: 75.14px;

  @media (min-width: 600px) {
    height: 138.47px;
  }
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  height: 43.14px;
  width: 153px;
  @media (min-width: 600px) {
    width: 257px;
    height: 72.47px;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  .mobilePrestitial {
    display: none !important;
  }
`;

const PopupHeader = styled.div`
  background: #2b2d2f;
  height: 80px;
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: center;
  margin: -20px;
  box-shadow: 0 3px 14px rgb(0 0 0 / 40%);
`;

const PopupTitle = styled.h2`
  margin: 20px;
  color: #fff;
  max-width: 75%;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 20px 0 0 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
`;
const Layout = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;
const MapWrapper = styled.div`
  flex: 1 1 auto;
`;

const Map = ({ locations }) => {
  return (
    <Layout>
      <Header>
        <LogoWrapper>
          <Image
            src={"/yarmonicsLogo.jpg"}
            alt="Yarmonics logo"
            width={257}
            height={72.47}
          />
        </LogoWrapper>
      </Header>
      <MapWrapper>
        <MapContainer
          center={[52.60839450365971, 1.7310895754408306]}
          bounds={([52.61495, 1.697], [52.55872, 1.76277])}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
        >
          <ZoomControl position="bottomright" />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <StyledList>
            {locations.map(({ id, title, lat, long, performances }) => (
              <li key={id}>
                <Marker position={[lat, long]} icon={icon}>
                  <StyledPop maxHeight={600}>
                    <PopupHeader>
                      <PopupTitle>{title}</PopupTitle>
                    </PopupHeader>

                    <StyledList>
                      {performances.map(
                        ({ id, name, description, image, soundcloudLink }) => (
                          <li key={id}>
                            <ArtistTitle>{name}</ArtistTitle>

                            <Image
                              src={image.url}
                              alt={image.alternativeText}
                              width={1000}
                              height={563}
                            />
                            <p>{description}</p>
                            <StyledReactPlayer
                              width="100%"
                              height="100%"
                              url={soundcloudLink}
                              fallback={<SpinnerRoundOutlined />}
                              config={{
                                soundcloud: {
                                  options: { show_teaser: "false" },
                                },
                              }}
                            />
                          </li>
                        )
                      )}
                    </StyledList>
                  </StyledPop>
                </Marker>
              </li>
            ))}
          </StyledList>
        </MapContainer>
      </MapWrapper>
    </Layout>
  );
};

export default Map;

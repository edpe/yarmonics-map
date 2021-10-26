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
  }

  .leaflet-popup-close-button {
    margin: 15px 10px !important;
    font-size: 40px !important;
    color: #fff !important;
    background: transparent !important;
    padding: 6px 1px !important;
    width: 30px !important;
    height: 30px !important;
    z-index: 20;
    position: sticky;
    top: 0;
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
  height: 138.47px;
  @media (max-width: 625px) {
    height: 75.14px;
  }
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  @media (max-width: 625px) {
    height: 43.14px;
    width: 153px;
  }
  width: 257px;
  height: 72.47px;
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
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 20px 0 0 0;
`;

const Map = ({ locations }) => {
  return (
    <>
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
      <MapContainer
        center={[52.60839450365971, 1.7310895754408306]}
        bounds={([52.61495, 1.697], [52.55872, 1.76277])}
        zoom={14}
        style={{ height: "100vh", width: "100%" }}
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ul>
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
        </ul>
      </MapContainer>
    </>
  );
};

export default Map;

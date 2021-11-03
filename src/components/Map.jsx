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

  .leaflet-popup-content {
    overflow-y: auto;
    width: calc(100vw - 50px) !important;
    max-width: 360px;
    overflow-x: hidden;
    // viewport height - header height - footer height
    max-height: calc(100vh - 75.14px - 10px - 50px);
    margin: 0 !important;
    padding: 0 19px !important;

    @media (min-width: 600px) {
      max-height: calc(100vh - 125px - 10px - 80px);
    }
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

const StyledReactPlayer = styled(ReactPlayer)`
  .mobilePrestitial {
    display: none !important;
  }
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

const Map = ({ locations }) => {
  return (
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
              <StyledPop>
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
  );
};

export default Map;

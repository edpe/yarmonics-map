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

  .leaflet-popup-close-button {
    margin: 20px !important;
    font-size: 40px !important;
    color: #333 !important;
    background: white !important;
    padding: 6px 1px !important;
    border: 2px solid #333 !important;
    width: 30px !important;
    height: 30px !important;
  }

  .leaflet-popup-scrolled {
    border: none;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  .mobilePrestitial {
    display: none !important;
  }
`;

const PopupContentWrapper = styled.div`
  margin: 0 15px;
`;

const ArtistTitle = styled.h3`
  margin-top: 30px;
`;

const icon = new Icon({
  iconUrl: "/mapPin.svg",
  iconSize: [23, 32],
});

const Map = ({ locations }) => {
  return (
    <MapContainer
      center={[52.60839450365971, 1.7310895754408306]}
      zoom={14}
      style={{ height: "100vh", width: "100%" }}
      zoomControl={false}
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(({ id, title, lat, long, performances }) => (
        <React.Fragment key={id}>
          <Marker position={[lat, long]} icon={icon}>
            <StyledPop maxHeight={600}>
              <PopupContentWrapper>
                <h2>{title}</h2>
                {performances.map(
                  ({ id, name, description, image, soundcloudLink }) => (
                    <React.Fragment key={id}>
                      <ArtistTitle>{name}</ArtistTitle>
                      <div>
                        <Image
                          src={image.url}
                          alt={image.alternativeText}
                          width={1000}
                          height={915}
                        />
                      </div>
                      <p>{description}</p>
                      <StyledReactPlayer
                        url={soundcloudLink}
                        width="100%"
                        height="100%"
                        config={{
                          soundcloud: {
                            options: { show_teaser: "false" },
                          },
                        }}
                      />
                    </React.Fragment>
                  )
                )}
              </PopupContentWrapper>
            </StyledPop>
          </Marker>
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default Map;

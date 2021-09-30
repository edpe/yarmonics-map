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

const PopupContentWrapper = styled.div`
  margin: 0 15px;
`;

const icon = new Icon({
  iconUrl: "/mapPin.svg",
  iconSize: [23, 32],
});

const venues = [
  {
    id: "minster",
    name: "Minster",
    location: [52.61148728930682, 1.7273403270395928],
    performances: [
      {
        id: "michael-page",
        name: "Michael Page",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        soundcloudLink:
          "https://soundcloud.com/user-146670016/stuart-bowditch-yarcade",
        images: [
          {
            image:
              "https://www.khaosodenglish.com/wp-content/uploads/2016/07/nftu.03.head_.jpg",
            altText: "an image of michael page",
          },
          {
            image:
              "https://www.khaosodenglish.com/wp-content/uploads/2016/07/nftu.03.head_.jpg",
            altText: "an image of michael page performing",
          },
        ],
      },
      {
        id: "tazelaar-stevenson",
        name: "Tazelaar Stevenson",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        soundcloudLink:
          "https://soundcloud.com/edperkinsmusic/the-stream-first-rehearsal",
        images: [
          {
            image:
              "https://www.khaosodenglish.com/wp-content/uploads/2016/07/nftu.03.head_.jpg",
            altText: "an image of michael page",
          },
          {
            image:
              "https://www.khaosodenglish.com/wp-content/uploads/2016/07/nftu.03.head_.jpg",
            altText: "an image of talezaar stevenson performing",
          },
        ],
      },
    ],
  },
  {
    id: "hippodrome",
    name: "Hippodrome",
    location: [52.603327314293566, 1.7355301153441194],
    performances: [
      {
        id: "the-seer",
        name: "The Seer",
        description:
          "Auctor augue mauris augue neque gravida in. Quis risus sed vulputate odio ut. Mi quis hendrerit dolor magna eget est lorem. Gravida arcu ac tortor dignissim. Quis eleifend quam adipiscing vitae proin. ",
        soundcloudLink:
          "https://soundcloud.com/user-146670016/stuart-bowditch-yarcade",
        images: [
          {
            image:
              "https://www.khaosodenglish.com/wp-content/uploads/2016/07/nftu.03.head_.jpg",
            altText: "an image of The Seer performing",
          },
          {
            image:
              "https://www.khaosodenglish.com/wp-content/uploads/2016/07/nftu.03.head_.jpg",
            altText: "an image of The Seer performing",
          },
        ],
      },
      {
        id: "tazelaar-stevenson",
        name: "Tazelaar Stevenson",
        description:
          "Ut venenatis tellus in metus vulputate eu scelerisque. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Viverra adipiscing at in tellus integer feugiat scelerisque.",
        soundcloudLink:
          "https://soundcloud.com/edperkinsmusic/the-stream-first-rehearsal",
        images: [
          {
            image:
              "https://www.khaosodenglish.com/wp-content/uploads/2016/07/nftu.03.head_.jpg",
            altText: "an image of michael page",
          },
          {
            image:
              "https://www.khaosodenglish.com/wp-content/uploads/2016/07/nftu.03.head_.jpg",
            altText: "an image of talezaar stevenson performing",
          },
        ],
      },
      {
        id: "tazelaar-stevenson",
        name: "Tazelaar Stevenson",
        description:
          "Risus viverra adipiscing at in tellus. Id leo in vitae turpis massa sed. Vitae congue eu consequat ac. Ultrices sagittis orci a scelerisque purus semper. Vitae semper quis lectus nulla at. Parturient montes nascetur ridiculus mus mauris. Dictum fusce ut placerat orci.",
        soundcloudLink:
          "https://soundcloud.com/edperkinsmusic/the-stream-first-rehearsal",
        images: [
          {
            image:
              "https://www.khaosodenglish.com/wp-content/uploads/2016/07/nftu.03.head_.jpg",
            altText: "an image of michael page",
          },
          {
            image:
              "https://www.khaosodenglish.com/wp-content/uploads/2016/07/nftu.03.head_.jpg",
            altText: "an image of talezaar stevenson performing",
          },
        ],
      },
    ],
  },
];

const Map = () => {
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
      {venues.map(({ id, location, name, performances }) => (
        <React.Fragment key={id}>
          <Marker position={location} icon={icon}>
            <StyledPop maxHeight={600}>
              <PopupContentWrapper>
                <h2>{name}</h2>
                {performances.map(({ id, name, images, description }) => (
                  <React.Fragment key={id}>
                    <h3>{name}</h3>
                    <div>
                      <Image
                        src={images[0].image}
                        alt={images[0].altText}
                        width={1000}
                        height={915}
                      />
                    </div>
                    <p>{description}</p>
                  </React.Fragment>
                ))}
              </PopupContentWrapper>
            </StyledPop>
          </Marker>
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default Map;

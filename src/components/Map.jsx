import React from "react";
import Image from "next/image";
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

import styles from "./Map.module.css";

const icon = new Icon({
  iconUrl: "/mapPin.svg",
  iconSize: [23, 32],
});

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
      <ul className={styles.listWithoutBullets}>
        {locations.map(({ id, title, lat, long, performances }) => (
          <li key={id}>
            <Marker position={[lat, long]} icon={icon}>
              <Popup>
                <div className={styles.popupHeader}>
                  <h2 className={styles.popupTitle}>{title}</h2>
                </div>
                <ul className={styles.listWithoutBullets}>
                  {performances.map(
                    ({ id, name, description, image, soundcloudLink }) => (
                      <li key={id}>
                        <h3 className={styles.artistTitle}>{name}</h3>
                        <Image
                          src={image.url}
                          alt={image.alternativeText}
                          width={1000}
                          height={563}
                        />
                        <p>{description}</p>
                        <ReactPlayer
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
                </ul>
              </Popup>
            </Marker>
          </li>
        ))}
      </ul>
    </MapContainer>
  );
};

export default Map;

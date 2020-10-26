import React from "react";
import { GoogleMapProvider, MapBox, InfoWindow } from "@googlemap-react/core";
import { GOOGLE_API } from "../../services/api";

export const Map = (props) => {
  return (
    <div className="d-flex container map">
      <GoogleMapProvider>
        <MapBox
          apiKey={GOOGLE_API}
          opts={{
            center: { lat: props.lat, lng: props.long },
            zoom: 6,
          }}
          style={{
            height: "50vh",
            width: "100%",
          }}
        />
        <InfoWindow
          opts={{
            content: `${props.name}`,
            position: { lat: props.lat, lng: props.long },
          }}
          visible
        />
      </GoogleMapProvider>
    </div>
  );
};

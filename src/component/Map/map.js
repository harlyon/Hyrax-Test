import React from "react";
import {
  GoogleMapProvider,
  MapBox,
  InfoWindow,
} from "@googlemap-react/core";

export const Map = (props) => {

  return (
    <div className="d-flex container map">
      <GoogleMapProvider>
        <MapBox
          apiKey="AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk"
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

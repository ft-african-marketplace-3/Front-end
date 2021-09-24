import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function GMap() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -1.318417, lng: 36.816694 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(GMap));

export default function Map() {
  return (
    <div className="mapDiv">
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          //   &key=AIzaSyBBm-pPoG2CnUzlbB64uT9c2Ol19UrEn3E" this is the rest of the API
        }
        loadingElement={<div style={{ width: "100%", height: "40vh" }} />}
        containerElement={<div style={{ width: "100%", height: "40vh" }} />}
        mapElement={<div style={{ width: "100%", height: "40vh" }} />}
      />
    </div>
  );
}

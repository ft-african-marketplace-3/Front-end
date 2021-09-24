import React from "react"
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function GMap() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 59.95, lng: 30.33 }} />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(GMap))

export default function Map() {
  return (
    <div className="mapDiv">
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          //   &key=AIzaSyBBm-pPoG2CnUzlbB64uT9c2Ol19UrEn3E" this is the rest of the API
        }
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
      Map Here
    </div>
  )
}

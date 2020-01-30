import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 38.89511, lng: -77.03637 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const OnePagerMap = props => {
  return (
    <div className="onepager-map-main" style={{ width: "90%", height: "50%" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAgnkikGFqIBNf2mYy6G4UiHzd-Lphe9o4&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default OnePagerMap;

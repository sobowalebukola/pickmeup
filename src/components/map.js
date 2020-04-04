import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import FindMe from "../Button/Index";
import { LOCATE } from "./getLocation";
import { api_key } from "../constants/api";
import { Dots } from 'react-activity';

LOCATE();

const MapContainer = (props) => {
  const [show, setShow] = useState(false);
  const finder = () => {
    setShow(!show);
  };
  if (!props.google) {
    return <div> <Dots /> </div>;
  }
  return (
    <div>
      <Map
        style={{
          minWwidth: "200px",
          minHeight: "200px",
        }}
        google={props.google}
        zoom={6}
        initialCenter={{ lat: 9.077751, lng: 8.6774567 }}
      >
        {show && (
          <Marker
            title={"Your location"}
            position={{ lat: window.latitude, lng: window.longitude }}
          />
        )}
        <FindMe onClick={finder} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: api_key,
})(MapContainer);

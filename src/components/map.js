import React, { useState , useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import FindMe from "../Button/Index";
import { api_key } from "../constants/api";
import { Dots } from 'react-activity';


const MapContainer = (props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    (function LOCATE(){
      var latitude ;
      var longitude;
      function success(position) {
       latitude  = position.coords.latitude;
       longitude = position.coords.longitude;
       window.latitude = latitude;
       window.longitude = longitude;
  }
  navigator.geolocation.getCurrentPosition(success);
  })()
  }, []);
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
        zoom={16}
        initialCenter={{ lat: window.latitude, lng: window.longitude }}
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

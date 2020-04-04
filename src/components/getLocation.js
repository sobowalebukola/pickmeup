export const  LOCATE  = () => {
    var latitude ;
    var longitude;
    function success(position) {
     latitude  = position.coords.latitude;
     longitude = position.coords.longitude;
     window.latitude = latitude;
     window.longitude = longitude;
}
navigator.geolocation.getCurrentPosition(success);
}



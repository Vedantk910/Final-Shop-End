import React, { useEffect,useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";


const Geolocation = () => {
    const [newLatitude, setLatitude] = useState(null)
    const [newLongitude, setLongitude] = useState(null)
    useEffect(() => {
        var location = {
            latitude: "",
            longitude: ""
          }
        //console.log("Loading user details")
        //dispatch(LoadUser())
    
        //gettign user's current location
        navigator.geolocation.watchPosition(position => {
          const { latitude, longitude } = position.coords;
          //console.log(latitude, longitude, "here");
          //dispatch(showAllLocalShops({ latitude: latitude, longitude: longitude }))
          location.latitude = latitude
          location.longitude = longitude
          setLatitude(latitude)
          setLongitude(longitude)
        });
    
      }, [])

  useEffect(() => {
    if(! newLatitude && ! newLongitude)
    return;
    const map = L.map("map").setView([newLatitude, newLongitude], 10);
    const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: `© OpenStreetMap contributors`,
    }).addTo(map);

    const taxiIcon = L.icon({
      iconUrl: "https://raw.githubusercontent.com/iamtekson/Leaflet-Basic/master/routing/img/taxi.png",
      iconSize: [70, 70],
    });


    const marker = L.marker([20.952048786860452, 79.02300794596553], { icon: taxiIcon }).addTo(map);

    map.on("click", function (e) {
      console.log(e);
      const newMarker = L.marker([20.950594, 79.029613]).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(20.952048786860452, 79.02300794596553),
          L.latLng(20.950594, 79.029613),
        ],
        routeWhileDragging: true,
      })
        .on("routesfound", function (e) {
          const routes = e.routes;
          console.log(routes);
          e.routes[0].coordinates.forEach(function (coord, index) {
            setTimeout(function () {
              marker.setLatLng([coord.lat, coord.lng]);
            }, 100 * index);
          });
        })
        .addTo(map);
    });
  }, [newLatitude, newLongitude]);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
};

export default Geolocation;

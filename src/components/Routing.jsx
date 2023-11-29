import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { useDispatch, useSelector} from 'react-redux';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing() {
  const map = useMap();
  const dispatch = useDispatch()
  const [newLatitude, setLatitude] = useState(null)
  const [newLongitude, setLongitude] = useState(null)
  var location = {
    latitude: "",
    longitude: ""
  }

  const {shop} = useSelector(state => state.shop)

  useEffect(() => {
    //gettign user's current location
    navigator.geolocation.watchPosition(position => {
      const { latitude, longitude } = position.coords;
      //console.log(latitude, longitude, "here");
      location.latitude = latitude
      location.longitude = longitude
      setLatitude(latitude)
      setLongitude(longitude)
    });

  }, [])

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(newLatitude || 12.9590503,newLongitude || 77.578108),
                  L.latLng(shop && shop.location.latitude || 12.931852, shop && shop.location.longitude || 77.6049124)
                 ],  // Alphastream to my PG
      routeWhileDragging: true
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, newLatitude, newLongitude, shop]);

  return null;
}
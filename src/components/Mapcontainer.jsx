import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

import Routing from "./Routing";

export default function MapContainers() {
//   const position = [51.505, -0.09];
  const position = [12.9590503, 77.578108];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", zIndex:"400" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing />
    </MapContainer>
  );
}

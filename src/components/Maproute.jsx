import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet/dist/leaflet.css'

function NavigationControl(props) {
  const map = useMap();

  const handleNavigation = (event) => {
    event.preventDefault();

    const lat = parseFloat(event.target.dataset.lat);
    const lng = parseFloat(event.target.dataset.lng);

    props.handleNavigation(lat, lng);

    map.flyTo([lat, lng], map.getZoom());
  };

  return (
    <div className="leaflet-bottom leaflet-right">
      <div className="leaflet-control">
        <button onClick={handleNavigation} data-lat="51.505" data-lng="-0.09">
          London
        </button>
        <button onClick={handleNavigation} data-lat="40.7128" data-lng="-74.006">
          New York
        </button>
        <button onClick={handleNavigation} data-lat="48.8566" data-lng="2.3522">
          Paris
        </button>
      </div>
    </div>
  );
}

function Maproute() {
  const [map, setMap] = useState(null);
  const [route, setRoute] = useState(null);

  const start = L.latLng(51.505, -0.09); // London
  const end = L.latLng(48.8566, 2.3522); // Paris

  const onMapLoad = (map) => {
    setMap(map);

    L.Routing.control({
      waypoints: [start, end],
      router: L.Routing.osrmv1({
        serviceUrl: 'https://api.openrouteservice.org/v2/directions',
        timeout: 30 * 1000,
        profile: 'driving-car',
        api_key: '5b3ce3597851110001cf6248c9bac1607c8c4995b2fa02b9b911c609'
      })
    }).addTo(map).on('routesfound', (e) => {
      const routes = e.routes;
      const route = routes[0];
      setRoute(route);
    });
  };

  return (
    <MapContainer center={start} zoom={6} style={{ height: '100vh' }} whenCreated={onMapLoad}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {route && (
        <React.Fragment>
          <Marker position={start}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

          <Marker position={end}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

          <L.Routing.Line route={route} />
        </React.Fragment>
      )}

      <NavigationControl handleNavigation={(lat, lng) => setMap(map => {
        map.flyTo([lat, lng], map.getZoom());
        return map;
      })} />
    </MapContainer>
  );
}

export default Maproute;

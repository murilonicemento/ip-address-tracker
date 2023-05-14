import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.scss";

export function Map({ data }) {
  return (
    <div id="map">
      {data?.location ? (
        <MapContainer
          center={[data.location.lat, data.location.lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[data.location.lat, data.location.lng]}>
            <Popup>IP Location</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <MapContainer center={[34.04915, -118.09462]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[34.04915, -118.09462]}>
            <Popup>Default IP Location</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

Map.propTypes = {
  data: PropTypes.object,
};

import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.scss";

export function Map({ data }) {
  return (
    <div id="map">
      {data.location && (
        <MapContainer
          center={[data.location.lat, data.location.lng]}
          zoom={13}
          scrollWheelZoom={false}
          className="map-container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
          />
          <Marker position={[data.location.lat, data.location.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

Map.propTypes = {
  data: PropTypes.object,
};

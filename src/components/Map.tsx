
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ onLocationSelect }: { onLocationSelect: (lat: number, lon: number) => void }) => {
  const LocationClick = () => {
    useMapEvents({
      click(e: any) {
        const { lat, lng } = e.latlng;
        onLocationSelect(lat, lng);
      },
    });
    return null;
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationClick />
    </MapContainer>
  );
};

export default Map;

import { MapContainer, TileLayer, useMapEvents, useMap } from "react-leaflet";
import { useEffect } from "react";

function MapEvents({ onLocationChange }) {
  const map = useMap();

  useMapEvents({
    moveend() {
      const center = map.getCenter();
      onLocationChange(center.lat, center.lng);
    },
  });

  return null;
}

function ChangeMapCenter({ latitude, longitude }) {
  const map = useMap();

  useEffect(() => {
    if (
      latitude != null &&
      longitude != null &&
      latitude !== "" &&
      longitude !== ""
    ) {
      map.setView([Number(latitude), Number(longitude)], 15);
    }
  }, [latitude, longitude, map]);

  return null;
}

function AddressMap({ onLocationChange, latitude, longitude }) {
  const hasLocation =
    latitude !== "" &&
    longitude !== "" &&
    latitude != null &&
    longitude != null;

  const initialCenter = hasLocation
    ? [Number(latitude), Number(longitude)]
    : [35.6892, 51.389];

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={initialCenter}
        zoom={15}
        style={{ width: "100%", height: "100%", zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <ChangeMapCenter latitude={latitude} longitude={longitude} />

        <MapEvents onLocationChange={onLocationChange} />
      </MapContainer>

      <div
        className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-9 w-9 -translate-y-1/2 text-red-600 drop-shadow-md"
          fill="currentColor"
        >
          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
      </div>
    </div>
  );
}

export default AddressMap;

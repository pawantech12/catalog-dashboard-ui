import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { BiExport } from "react-icons/bi";

// Initial user location data
const initialData = [
  { coordinates: { lat: 37.7749, lng: -122.4194 }, name: "San Francisco, USA" },
  { coordinates: { lat: 28.7041, lng: 77.1025 }, name: "Delhi, India" },
  { coordinates: { lat: -33.8568, lng: 151.207 }, name: "Sydney, Australia" },
  { coordinates: { lat: -23.5505, lng: -46.6333 }, name: "São Paulo, Brazil" },
  { coordinates: { lat: 40.7128, lng: -74.006 }, name: "New York, USA" },
];

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 20, // Center of the map (global view)
  lng: 0,
};

const ActiveUserMap = () => {
  const [sampleData, setSampleData] = useState(initialData);
  const [selectedUser, setSelectedUser] = useState(null);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSampleData((prevData) =>
        prevData.map((user) => ({
          ...user,
          coordinates: {
            lat: user.coordinates.lat + (Math.random() - 0.5) * 0.1,
            lng: user.coordinates.lng + (Math.random() - 0.5) * 0.1,
          },
        }))
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md w-[70%] transition-transform transform hover:scale-105  max-lg:w-full">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-700">
            Active User Map
          </h3>
          <p className="text-gray-500 text-xs font-semibold">
            <span className="text-dark-blue">8.06%</span> VS. previous month
          </p>
        </div>
        <button className=" p-3 rounded-md hover:text-dark-blue transition-colors ease-in-out duration-200 flex items-center gap-2 text-gray-500 text-sm font-medium">
          <span className="bg-button-bg-light p-2 rounded-full">
            <BiExport className="w-5 h-5" />
          </span>
          Export
        </button>
      </div>

      <div className="w-full mt-3">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAP_API}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
          >
            {sampleData.map((user, index) => (
              <Marker
                key={index}
                position={user.coordinates}
                onClick={() => setSelectedUser(user)}
              >
                {selectedUser && selectedUser.name === user.name && (
                  <InfoWindow
                    position={user.coordinates}
                    onCloseClick={() => setSelectedUser(null)}
                  >
                    <div>{user.name}</div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ActiveUserMap;

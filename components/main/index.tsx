import React, { useEffect, useMemo, useState } from "react";
import { NextPage } from "next";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import thrashCan from "@assets/main/trashCan.svg";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

interface Props {
  apiKey: string;
}

type Location = {
  lat: number;
  lng: number;
};

const staticMarkers: [number, number][] = [
  [36.3916264, 127.3637128],
  // [36.35978711068628, 127.5351046252189],
  // [36.267399627405155, 127.44693748123328],
  // [36.69989223651641, 127.49669368967889],
  // [36.62299814863977, 126.7862078280422],
  // [36.08909474573033, 127.02525136650084],
  // [35.8169968786926, 127.7728316339898],
];

const Main: NextPage<Props> = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });
  const [, setMap] = useState<google.maps.Map>();
  const [center, setCenter] = useState<Location>({
    lat: 0,
    lng: 0,
  });
  const [markers, setMarkers] = useState<[number, number][]>([]);

  const onLoad = (map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);

    setMap(map);
  };

  const onUnmount = () => {
    setMap(undefined);
  };

  const displayMarkers = useMemo(() => {
    return markers.map(([lat, lng], i) => (
      <Marker key={i} position={{ lat, lng }} icon={thrashCan} />
    ));
  }, [markers]);

  useEffect(() => {
    // TODO: get marker positions on Server
    setMarkers(staticMarkers);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setCenter({
        lat,
        lng,
      });
    });
  }, [isLoaded]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {displayMarkers}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Main);

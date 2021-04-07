import { useCallback, useEffect, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

type Location = {
  lat: number;
  lng: number;
};

const useGoogleMap = (apiKey: string) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });
  const [isMapLoaded, setMapLoaded] = useState(false);
  const [googleMap, setMap] = useState<google.maps.Map>();
  const [center, setCenter] = useState<Location>({
    lat: 36.39,
    lng: 127.36,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds();

    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(undefined);
  }, []);

  const onChangeMapCenter = useCallback(() => {
    const longitude = googleMap?.getCenter()?.lng();
    const latitude = googleMap?.getCenter()?.lat();
    const isInitialCenter = longitude === 180 && latitude === 0;

    if (isInitialCenter) return setMapLoaded(true);
  }, [googleMap]);

  const onClickGetLocation = useCallback((e: google.maps.MapMouseEvent) => {
    const geocoder = new window.google.maps.Geocoder();

    const lat = e.latLng?.lat() as number;
    const lng = e.latLng?.lng() as number;
    const location = {
      lat,
      lng,
    };

    geocoder.geocode({ location }, (results, status) => {
      if (!results) return;

      if (status === "OK") {
        console.log(results);
      } else {
        alert("주소 불러오기 실패");
      }
    });
  }, []);

  const initCameraCenter = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setCenter({
        lat,
        lng,
      });
    });
  }, []);

  useEffect(() => {
    initCameraCenter();
  }, []);

  return [
    isLoaded,
    isMapLoaded,
    center,
    onLoad,
    onUnmount,
    onChangeMapCenter,
    onClickGetLocation,
  ] as const;
};

export default useGoogleMap;

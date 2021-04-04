import { NextPage } from "next";
import React, { useEffect, useMemo, useCallback } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

import thrashCan from "@assets/main/trashCan.svg";
import { fetchLogin } from "@utils/api/login";
import useMain from "@utils/hook/useMain";
import useGoogleMap from "@utils/hook/useGoogleMap";

const containerStyle = {
  width: "100%",
  height: "calc(100vh - 40px)",
};

interface Props {
  apiKey: string;
  id: string;
  password: string;
}

const Main: NextPage<Props> = ({ apiKey, id, password }) => {
  const [
    isLoaded,
    isMapLoaded,
    center,
    onLoad,
    onUnmount,
    onChangeMapCenter,
    onClickGetLocation,
  ] = useGoogleMap(apiKey);

  const [trashCans, trashes] = useMain(id, password);

  const initAccessToken = useCallback(async () => {
    try {
      const { accessToken } = await fetchLogin({ id, password });

      localStorage.setItem("accessToken", accessToken);
    } catch {}
  }, [id, password]);

  const displayTrashes = useMemo(() => {
    return trashes.map(({ latitude: lat, longitude: lng }, i) => (
      <Marker key={i} position={{ lat: lat, lng: lng }} icon={thrashCan} />
    ));
  }, [trashes]);

  const displayTrashCans = useMemo(() => {
    return trashCans.map(({ latitude: lat, longitude: lng }, i) => (
      <Marker key={i} position={{ lat: lat, lng: lng }} icon={thrashCan} />
    ));
  }, [trashCans]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token || token === "undefined") {
      initAccessToken();
      return;
    }
  }, []);
  useEffect(() => {
    // TODO: 쓰레기 통 지역 별 개수 세기
    // if (!window.google) return;
    // const geocoder = new window.google.maps.Geocoder();
    // geocoder.geocode(
    //   {
    //     location: { lat: 36.36, lng: 128.07 },
    //   },
    //   (results, status) => {
    //     if (status === "OK") {
    //       console.log(results);
    //     }
    //   }
    // );
  }, [trashCans]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={isMapLoaded ? center : void {}}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onCenterChanged={onChangeMapCenter}
      onClick={onClickGetLocation}
    >
      {displayTrashCans}
      {displayTrashes}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Main);

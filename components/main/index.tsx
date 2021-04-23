import { NextPage } from "next";
import React, { useEffect, useMemo, useCallback, useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

import { fetchLogin } from "@utils/api/login";
import useMain from "@utils/hook/useMain";
import useGoogleMap from "@utils/hook/useGoogleMap";
import { IMAGE_BASE_URL } from "@utils/api/client";

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
  const [trashes, trashCans] = useMain({ id, password });
  const scaledSize = useRef<google.maps.Size>({
    width: 30,
    height: 30,
    equals: () => true,
  });

  const initAccessToken = useCallback(async () => {
    try {
      const { accessToken } = await fetchLogin({ id, password });

      localStorage.setItem("accessToken", accessToken);
    } catch {}
  }, [id, password]);

  const displayTrashes = useMemo(() => {
    return trashes.map(({ latitude: lat, longitude: lng, photo_url }, i) => (
      <Marker
        key={i}
        position={{ lat, lng }}
        icon={{
          url: `${IMAGE_BASE_URL}/${photo_url}`,
          scaledSize: scaledSize.current,
        }}
      />
    ));
  }, [trashes]);

  const displayTrashCans = useMemo(() => {
    return trashCans.map(({ latitude: lat, longitude: lng, photo_url }, i) => (
      <Marker
        key={i}
        position={{ lat, lng }}
        icon={{
          url: `${IMAGE_BASE_URL}/${photo_url}`,
          scaledSize: scaledSize.current,
        }}
      />
    ));
  }, [trashCans]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token || token === "undefined") {
      initAccessToken();
      return;
    }
  }, []);

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

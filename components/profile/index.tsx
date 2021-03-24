import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { GlUser } from "@pages/profile";

const containerStyle = {
  width: "800px",
  height: "800px",
};

interface Props {
  glUser: GlUser;
  apiKey: string;
}

const Profile: NextPage<Props> = ({ glUser, apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });
  const user = glUser.data.user;
  const {
    address: {
      geo: { lat, lng },
    },
    username,
    email,
  } = user;

  const [, setMap] = useState(null);

  const onLoad = useCallback((map: any) => {
    const bounds = new (window as any).google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <h1>username: {username}</h1>
      <h2>email: {email}</h2>
      <div>
        <p>location</p>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(Profile);

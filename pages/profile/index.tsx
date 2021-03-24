import { GetStaticProps, NextPage } from "next";

import Profile from "@components/profile";

export interface GlUser {
  data: {
    user: {
      id: string;
      username: string;
      email: string;
      address: {
        geo: { lat: number; lng: number };
      };
    };
  };
}

interface Props {
  glUser: GlUser;
  apiKey: string;
}

const request = (query: string) => {
  return fetch("https://graphqlzero.almansi.me/api", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query }),
  });
};

export const getStaticProps: GetStaticProps = async () => {
  const { GOOGLE_MAP_API_KEY: apiKey } = process.env;

  const getUserQuery = `{
    user(id: 1) {
      id
      username
      email
      address {
        geo {
          lat
          lng
        }
      }
    }
  }`;

  const glUser = await (await request(getUserQuery)).json();

  return {
    props: {
      glUser,
      apiKey,
    },
  };
};

const ProfilePage: NextPage<Props> = ({ glUser, apiKey }) => {
  return <Profile glUser={glUser} apiKey={apiKey} />;
};

export default ProfilePage;

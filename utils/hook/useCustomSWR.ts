import useSWR from "swr";
import axios, { AxiosError } from "axios";

import { BASE_URL } from "@utils/api/client";

function useCustomSWR<T = any>(url: string) {
  const fetcher = async (url: string) => {
    const res = await axios.get<T>(`${BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.data;
  };

  const res = useSWR<T, AxiosError>(url, fetcher);

  return [res.data, res.error] as const;
}

export default useCustomSWR;

// const [data, error] = useCustomSWR<ResTrashes>("/trash/all");
// if (error) {
//   return <div>error</div>;
// }
// if (!data) {
//   return <div>isLoding</div>;
// }
// return <div>data</div>;

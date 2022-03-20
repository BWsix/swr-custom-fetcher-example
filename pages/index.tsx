import type { NextPage } from "next";
import useSWR from "swr";
import { customFetcher } from "../utils/fetcher";

const Home: NextPage = () => {
  const { data } = useSWR(["/hello", "thisIsToken"], customFetcher);
  return <>{JSON.stringify(data)}</>;
};

export default Home;

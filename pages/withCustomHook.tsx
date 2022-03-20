import type { NextPage } from "next";
import { useCustomFetcher } from "../utils/useCustomFetcher";

const Home: NextPage = () => {
  const { data } = useCustomFetcher("/hello", "thisIsTokenForCustomHook");
  return <>{JSON.stringify(data)}</>;
};

export default Home;

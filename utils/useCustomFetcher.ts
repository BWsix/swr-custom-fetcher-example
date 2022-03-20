import useSWR from "swr";

const fetcher = (url: string, token: string) => {
  return fetch(`http://localhost:3000/api${url}/${token}`).then((res) =>
    res.json()
  );
};

export const useCustomFetcher = (url: string, token: string) => {
  const { data } = useSWR([url, token], fetcher);

  return { data };
};

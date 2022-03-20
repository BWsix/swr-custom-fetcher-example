export const customFetcher = (url: string, token: string) => {
  return fetch(`http://localhost:3000/api${url}/${token}`).then((res) =>
    res.json()
  );
};

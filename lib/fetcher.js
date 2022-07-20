import useSWR from "swr";

const rootURL = process.env.rootURL;
const testingURL = "http://localhost:3000/";

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint) {
  const { data, error } = useSWR(`${testingURL}${endpoint}`, response);

  return {
    information: data,
    isLoading: !error && !data,
    isError: error,
  };
}

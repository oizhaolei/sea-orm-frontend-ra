import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiUrl = "http://localhost:8086/api/graphql";

const accessToken = () => {
  return localStorage.getItem("access_token") || "";
};
export const client = new ApolloClient({
  uri: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken()}`,
  },
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

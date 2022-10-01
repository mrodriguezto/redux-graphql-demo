import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URl || "http://localhost:5000/",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (token) {
      operation.setContext(({ headers = {} }) => ({
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      }));
    }
  }

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;

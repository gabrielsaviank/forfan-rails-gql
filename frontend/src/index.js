import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from "react-apollo";
import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";

import App from "./App";
import reportWebVitals from './reportWebVitals';
import './tailwind.css';

const link = createHttpLink({
    uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
    link: link,
   cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);

reportWebVitals();

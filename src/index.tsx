import * as React from "react";
import * as ReactDOMClient from 'react-dom/client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
});

const container: any = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);
root.render(
    <ApolloProvider client={client}>   <App /></ApolloProvider>

);

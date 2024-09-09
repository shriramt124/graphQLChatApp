import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App.jsx'
import './index.css'
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)

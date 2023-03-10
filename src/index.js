import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/store";

import {
  BrowserRouter,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StyledEngineProvider injectFirst>
            <BrowserRouter>
              <App />
            </BrowserRouter>
            </StyledEngineProvider>
          </PersistGate>
    </Provider>
  </React.StrictMode>
);

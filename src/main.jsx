import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TrainDetails from './Components/TrainDetails/trainDetails.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/listing",
    element: <TrainDetails />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </RecoilRoot>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "@/App.tsx";
import Humor from "@/routes/humor/Humor.tsx";
import HumorDetail from "@/routes/humor/HumorDetail.tsx";

const router = createBrowserRouter([
    {
        path: '*',
        element: <App/>,
    },
    {
        path: '/humor',
        element: <Humor/>,
        
    },
    {
        path: "humor/:humorId",
        element: <HumorDetail />,
    },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

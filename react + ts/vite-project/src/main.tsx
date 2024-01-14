import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './portfolio/Navbar.tsx'
import "./css/Style.css";
import "./css/MediaQueries.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
)

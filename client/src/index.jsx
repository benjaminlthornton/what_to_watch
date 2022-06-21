import { createRoot } from "react-dom/client";
import React from 'react'
import Home from './components/Home'

const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
function App() {
 return (
  <Home />
  )
}

root.render(<App />);
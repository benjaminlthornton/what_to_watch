import { createRoot } from "react-dom/client";
import React from 'react'
import Home from './components/Home'

const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
function App() {
 return (
  <>
    <h1>What to watch</h1>
    <Home />
  </>
  )
}

root.render(<App />);
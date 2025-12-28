import { StrictMode } from 'react' // Import StrictMode to catch potential bugs during development
import { createRoot } from 'react-dom/client' // Import createRoot to render the React application into the DOM
import './index.css' // Import global CSS styles for the entire app
import App from './App.jsx' // Import the main App component, which is the root of our layout

// Find the HTML element with id 'root' and create a React root to manage it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode helps identify side effects and deprecated APIs during development */}
    <App />
    {/* This is our main application component that contains everything else */}
  </StrictMode>,
)


import React from "react"; // Import the React library to use JSX and components
import Navbar from "./sections/Navbar"; // Import the navigation bar section
import Hero from "./sections/Hero"; // Import the top hero/intro section
import About from "./sections/About"; // Import the about me section
import Projects from "./sections/Projects"; // Import the projects showcase section
import Experience from "./sections/Experience"; // Import the experience timeline (currently unused)
import Contact from "./sections/Contact"; // Import the contact form section
import Footer from "./sections/Footer"; // Import the bottom footer section
import Exp from "./sections/Exp"; // Import the alternative experience section being used
import { ToastContainer } from "react-toastify"; // Import container for popup notifications
import "react-toastify/dist/ReactToastify.css"; // Import the default styles for notifications
const App = () => {
  // This is the Main Component that acts as a container for the whole website
  return (
    <main className="max-w-7xl mx-auto">
      {/* Navbar: Navigation menu at the top */}
      <Navbar />

      {/* Hero: Featured introductory section */}
      <Hero />

      {/* About: Information about the developer */}
      <About />

      {/* Projects: Display of completed work */}
      <Projects />

      {/* Exp: Rendering the professional experience section */}
      <Exp />

      {/* Contact: Form for users to send messages */}
      <Contact />

      {/* Footer: Bottom of the page with links and copyright */}
      <Footer />

      {/* ToastContainer: Required to handle the popup alerts globally */}
      <ToastContainer
        position="bottom-right" // Show alerts in the bottom right corner
        autoClose={5000} // Automatically close after 5 seconds
        hideProgressBar={false} // Show the progress bar timer
        newestOnTop={false} // Don't flip the order of multiple toasts
        closeOnClick // Let users click the toast to close it immediately
        rtl={false} // Left-to-right text direction
        pauseOnFocusLoss // Pause the timer if the browser window loses focus
        draggable // Allow dragging the toast
        pauseOnHover // Pause the timer when the mouse is over the toast
        theme="dark" // Use a dark theme to match the website aesthetic
      />
    </main>
  );
};

export default App; // Export the component so main.jsx can use it
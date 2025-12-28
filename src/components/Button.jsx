import React from "react"; // Import React to define the component

// Reusable Button Component
// Props: name (text), isBeam (glow effect), containerClass (custom styles)
const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        // button element with dynamic classes based on props
        <button className={`btn ${containerClass}`}>
            {/* Conditional Rendering: Show the "Beam" glow if isBeam is true */}
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping" /> {/* The outer pulsing animation */}
                    <span className="btn-ping_dot" /> {/* The inner solid dot */}
                </span>
            )
            }
            {/* Display the button text */}
            {name}
        </button>
    )
}
export default Button; // Export for use in other sections (like Hero)
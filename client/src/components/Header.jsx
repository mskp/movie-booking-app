import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

// Define the Header component
export default function Header() {
  // State to manage dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve dark mode preference from local storage
    const storedDarkMode = localStorage.getItem("darkMode");
    // Use stored value if available, default to true otherwise
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
  });

  // useEffect to update the body class based on darkMode state
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // Function to toggle dark mode and update local storage
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => {
      // Calculate the new dark mode state
      const newDarkMode = !prevDarkMode;
      // Update local storage with the new state
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      // Return the new state
      return newDarkMode;
    });
  }

  // Render the Header component
  return (
    <StyledHeader>
      {/* Logo */}
      <Logo className="logo">CineCrux</Logo>
      {/* Theme toggle button */}
      <ThemeToggleButton onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </ThemeToggleButton>
    </StyledHeader>
  );
}

// Styled components for the Header
const StyledHeader = styled.header`
  background: rgb(24 24 24);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  user-select: none;
  padding: 1rem;
  border-bottom: .06rem solid gray;
`;

const Logo = styled.h1`
  font-size: 1rem;
  color: #9c62c4;
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ffffff;
`;

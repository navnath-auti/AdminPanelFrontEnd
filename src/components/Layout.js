import React from "react";
import NavigationBar from "./NavigationBar"; // Import the NavigationBar component

function Layout({ children }) {
  return (
    <div>
      <NavigationBar /> {/* Include the NavigationBar component */}
      <main>{children}</main>
      <footer>Footer content</footer> {/* Include a footer */}
      {/* Additional layout content */}
    </div>
  );
}

export default Layout;

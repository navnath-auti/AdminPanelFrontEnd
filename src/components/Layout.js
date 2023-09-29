import React from "react";
import NavigationBar from "./NavigationBar"; // Import the NavigationBar component

function Layout({ children }) {
  return (
    <div>
      <NavigationBar /> {/* Include the NavigationBar component */}
      <main>{children}</main>
      {/* Additional layout content */}
    </div>
  );
}

export default Layout;

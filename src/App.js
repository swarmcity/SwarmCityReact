// Imports
import React from "react";
import { Route } from "react-router-dom";

// Subpages
import pages from "./pages";

// Styles
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.SwarmCity}>
      {pages.map(({ path, exact, component }) => (
        <Route key={path} {...{ path, exact, component }} />
      ))}
    </div>
  );
}

export default App;

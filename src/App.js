import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/layout";
import Logo from "./components/logo";
import AnimationRoot from "./components/animation-root";
import Labs from "./components/labs";
import Work from "./components/pages/work";
import styles from "./app.module.scss";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Router>
        <Logo />
        <Switch>
          <Route exact path="/">
            {isLoaded ? (
              <div className={styles.header}>
                <Link to="/labs" className={styles.link}>
                  The lab.
                </Link>
              </div>
            ) : null}
            <Layout>
              <AnimationRoot />
            </Layout>
          </Route>
          <Route path="/labs">
            <div className={styles.header}>
              <Link to="/" className={styles.link}>
                Go back.
              </Link>
            </div>
            <Labs />
          </Route>
          <Route exakt path="/work">
            <Work />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

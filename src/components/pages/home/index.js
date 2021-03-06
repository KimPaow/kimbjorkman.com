import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import { GoMarkGithub } from "react-icons/go";
import { FaBitbucket } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTrail, animated } from "react-spring";

const OrganicSphere = React.lazy(() =>
  import("../../organic-sphere/organic-sphere")
);

const Home = props => {
  const [isLoaded, setIsLoaded] = useState(false);

  const children = [
    "こんにちは。",
    "キムといます、良かったら連絡してください。",
    "よろしくお願いします〜",
    <span>
      <a href="https://github.com/KimPaow">
        <GoMarkGithub />
      </a>
      <a href="https://bitbucket.org/kimbjorkman/profile/repositories">
        <FaBitbucket />
      </a>
      <a href="https://medium.com/@kimbjrkman">
        <FaMedium />
      </a>
      <a href="mailto:kim.bjorkman@sunnyatsea.se">
        <MdEmail />
      </a>
    </span>
  ];

  const trailConfig = { mass: 10, tension: 2000, friction: 200, delay: 5000 };

  const trail = useTrail(children.length, {
    config: trailConfig,
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded
      ? "matrix(1.00,0.00,0.00,1.00,0,0) translate3d(0, 0, 0)"
      : "matrix(0.82,-0.57,0.57,0.82,50,50) translate3d(0, 0, 0)"
  });

  const createExpList = (children, trail) => {
    return trail.map((props, index) => (
      <animated.div key={children[index]} style={props}>
        {children[index]}
      </animated.div>
    ));
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <div className={styles.root}>
      <h1 hidden>Kim Björkman</h1>
      <div className={styles.intro_container}>
        <div className={styles.intro}>{createExpList(children, trail)}</div>
        <OrganicSphere />
      </div>
    </div>
  ) : null;
};

export default Home;

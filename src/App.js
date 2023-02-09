import "./index.css";
import React from "react";

import Container from "./components/Container.component";
import Intro from "./components/Intro.component";
import Parallax from "./sub-components/Parallax.sub-component";
import About from "./components/About.component";
import Contact from "./components/Contact.component";
const SkillSet = React.lazy(() => import("./components/SkillSet.component"));
const Project = React.lazy(() => import("./components/Projects.component"));
const Experience = React.lazy(() =>
  import("./components/Experience.component")
);
const Footer = React.lazy(() => import("./components/Footer.component"));

const portfolio = {
  name: "Herzlia Jane R. Barangan",
};

function App() {
  return (
    <Container>
      <Parallax>
        <Intro name={portfolio.name} />
      </Parallax>
      <About />
      <Parallax>
        {/* <SkillSet /> */}
      </Parallax>
      <Parallax>
        {/* <Project /> */}
      </Parallax>
      <Parallax>
        {/* <Experience /> */}
      </Parallax>
      <Parallax>
        <Contact />
      </Parallax>
      <Footer name={portfolio.name} />
    </Container>
  );
}

export default App;

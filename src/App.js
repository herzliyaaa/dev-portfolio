import "./index.css";
import React from "react";

import Container from "./components/Container.component";
import Intro from "./components/Intro.component";
import Parallax from "./sub-components/Parallax.sub-component";
const SkillSet = React.lazy(() => import("./components/SkillSet.component"));
const Project = React.lazy(() => import("./components/Projects.component"));
const Experience = React.lazy(() =>
  import("./components/Experience.component")
);

function App() {
  return (
    <div>
      <Container>
        <Parallax>
          <Intro />
        </Parallax>
        <Parallax>
          <SkillSet />
        </Parallax>
        <Parallax>
          <Project />
        </Parallax>
        <Experience />
      </Container>
    </div>
  );
}

export default App;

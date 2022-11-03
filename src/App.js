import "./index.css";
import React from "react";

import Container from "./components/Container.component";
import Intro from "./components/Intro.component";

const SkillSet = React.lazy(() => import("./components/SkillSet.component"));
const Experience = React.lazy(() =>
  import("./components/Experience.component")
);

function App() {
  return (
    <div>
      <Container>
        <Intro />
        <SkillSet />
        <Experience />
      </Container>
    </div>
  );
}

export default App;

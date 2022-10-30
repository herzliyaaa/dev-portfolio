import "./index.css";
import Container from "./components/Container.component";
import Intro from "./components/Intro.component";
import SkillSet from "./components/SkillSet.component";

function App() {
  return (
    <div className='App'>
      <Container>
        <Intro />
        <SkillSet />
      </Container>
    </div>
  );
}

export default App;

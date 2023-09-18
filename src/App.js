import "./index.css";
import React from "react";
import Container from "./components/Container.component";
import Parallax from "./sub-components/Parallax.sub-component";
const Footer = React.lazy(() => import("./components/Footer.component"));
const HomePage = React.lazy(() => import("./components/HomePage.component.jsx"));
const portfolio = {
  name: "Herzlia Jane R. Barangan",
};

function App() {
  return (
    <Container>
      <Parallax>
        <HomePage name={portfolio.name} />
      </Parallax>
    </Container>
  );
}

export default App;

import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import ParticlesBg from "particles-bg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;

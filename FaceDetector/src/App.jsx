import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import ParticlesBg from "particles-bg";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value)
    console.log(input)
  };

  const onButtonDetect = (event) => {
    console.log('click');
  };

  return (
    <div>
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonDetect={onButtonDetect}
      />
    </div>
  );
}

export default App;

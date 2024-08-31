import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import ParticlesBg from "particles-bg";

const returnClarifaiRequestOptions = (imageURL) => {
  const PAT = "34a199498cd84f50b50ab92b2ab6fbbb";
  const USER_ID = "luvche";
  const APP_ID = "my-app";
  const MODEL_ID = "face-detection";
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

function App() {
  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
    console.log(input);
  };

  const onButtonDetect = (event) => {
    console.log("click");

    fetch(
      "https://api.clarifai.com/v2/models/" +
        "face-detection" +
        "/versions/" +
        "/outputs",
      returnClarifaiRequestOptions(input)
    )
      .then((response) => response.json())
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {}
      );
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

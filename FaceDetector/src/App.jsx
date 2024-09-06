import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import SignIn from "./components/signin/SignIn";
import Rank from "./components/rank/Rank";
import Register from "./components/register/Register";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import ParticlesBg from "particles-bg";
import ThankYou from "./components/register/ThankYou";

const returnClarifaiRequestOptions = (imageURL) => {
  const PAT = "34a199498cd84f50b50ab92b2ab6fbbb";
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
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
  const [imageURL, setImageURL] = useState("");
  const [boxes, setBoxes] = useState([]);
  const [route, setRoute] = useState("signIn");

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
    console.log(input);
  };

  const calculateFaceLocation = (data) => {
    const regions = data.outputs[0].data.regions;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    const faceBoxes = regions.map((region) => {
      const regionData = region.region_info.bounding_box;
      return {
        leftCol: regionData.left_col * width,
        topRow: regionData.top_row * height,
        rightCol: width - regionData.right_col * width,
        bottomRow: height - regionData.bottom_row * height,
      };
    });

    return faceBoxes;
  };

  const onButtonDetect = () => {
    setImageURL(input);

    fetch(
      "https://api.clarifai.com/v2/users/luvche/apps/my-app/models/face-detection/outputs",
      returnClarifaiRequestOptions(input)
    )
      .then((response) => response.json())
      .then((response) => setBoxes(calculateFaceLocation(response)))

      .catch((err) => console.log(err));
  };

  const onRouteChange = (route) => {
    setRoute(route);
    if (route === "signIn") { // When signing out, clear the input and image
      setImageURL("");
      setInput("");
    }
  };

  return (
    <div className="">
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
      {route === "signIn" ? <SignIn onRouteChange={onRouteChange} /> : null}
      {route === "home" ? (
        <div>
          <Navigation onRouteChange={onRouteChange} />
          <div className="grid justify-center w-full">
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonDetect={onButtonDetect}
            />
            <FaceRecognition boxes={boxes} imageURL={imageURL} />
          </div>
        </div>
      ) : null}
      {route === "register" ? <Register onRouteChange={onRouteChange} /> : null}
      {route === "thankYou" ? <ThankYou onRouteChange={onRouteChange} /> : null}
    </div>
  );
}

export default App;

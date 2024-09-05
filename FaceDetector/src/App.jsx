import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import SignIn from "./components/signin/SignIn";
import Rank from "./components/rank/Rank";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import ParticlesBg from "particles-bg";

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
  const [signedIn, setSignedIn] = useState(false);

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

  const onButtonDetect = (event) => {
    setImageURL(input);

    fetch(
      "https://api.clarifai.com/v2/users/luvche/apps/my-app/models/face-detection/outputs",
      returnClarifaiRequestOptions(input)
    )
      .then((response) => response.json())
      .then((response) => setBoxes(calculateFaceLocation(response)))

      .catch((err) => console.log(err));
  };

  const onSignInClick = (event) => {
    setSignedIn(true)
  }

  const onSignOutClick = (event) => {
    setSignedIn(false)
  }

  return (
    <div className="">
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
      {signedIn ? <Navigation onSignOutClick={onSignOutClick} /> : <SignIn onSignInClick={onSignInClick} />}
      <div className={"grid justify-center w-full" + (signedIn ? "" : " hidden")}>
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={onInputChange}
          onButtonDetect={onButtonDetect}
        />
        <FaceRecognition boxes={boxes} imageURL={imageURL} />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
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
  const [box, setBox] = useState(0);

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
    console.log(input);
  };

  const calculateFaceLocation = (data) => {
    // const boxArray = data.outputs[0].data.regions.map((region) => {
    //   const clarifaiFace = region.region_info.bounding_box;
    //   const image = document.getElementById("inputimage");
    //   const width = Number(image.width);
    //   const height = Number(image.height);
    //   return {
    //     leftCol: clarifaiFace.left_col * width,
    //     topRow: clarifaiFace.top_row * height,
    //     rightCol: width - clarifaiFace.right_col * width,
    //     bottomRow: height - clarifaiFace.bottom_row * height,
    //   };
    // });

    // return boxArray;

    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFacebox = (myBox) => {
    setBox(myBox);
    console.log(box);
  };

  const onButtonDetect = (event) => {
    console.log("click");
    setImageURL(input);

    fetch(
      "https://api.clarifai.com/v2/users/luvche/apps/my-app/models/face-detection/outputs",
      returnClarifaiRequestOptions(input)
    )
      .then((response) => response.json())
      .then((response) => 
        displayFacebox(calculateFaceLocation(response)))

      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
      <Navigation />
      <div className="grid justify-center w-full">
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={onInputChange}
          onButtonDetect={onButtonDetect}
        />
        <FaceRecognition box={box} imageURL={imageURL} />
      </div>
    </div>
  );
}

export default App;

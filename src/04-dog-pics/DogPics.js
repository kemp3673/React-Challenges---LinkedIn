import { useState, useEffect } from "react";

export default function DogPics() {
  const [dog, setDog] = useState(
    "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg"
  );

  const getDoggieImage = async () => {
    await fetch("https://dog.ceo/api/breeds/image/random")
    .then((data) => data.json())
    .then((image) => {
      setDog(image.message);
    })
    .catch((err) => console.error("Error Retrieving Dog Image", err));
  }

  useEffect(() => {
    getDoggieImage();
  }, []);
  // API: https://dog.ceo/dog-api/
  return (
    <div className="dog-pics">
      <img src={dog} />
      <button onClick={() => getDoggieImage()}>🐶</button>
    </div>
  );
}

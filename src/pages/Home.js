import React, { useContext } from "react";
import { Context } from "../context/Context";
import Image from "../components/Image";
import getClass from "../util/util";

function Home() {
  const { photos } = useContext(Context);

  const photoElements = photos.map((photo, i) => {
    return <Image key={photo.id} img={photo} className={getClass(i)} />;
  });

  return (
    <>
      <div className="photos">{photoElements}</div>
    </>
  );
}

export default Home;

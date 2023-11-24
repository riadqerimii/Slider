import { Container } from "react-bootstrap";
import { data } from "./Data";
import { useState } from "react";

function About() {
  const [image, setImage] = useState(0);

  function nextButton() {
    if (image === data.length - 1) {
      setImage(0);
      return;
    }
    setImage(image + 1);
  }

  function prevButton() {
    if (image === 0) {
      setImage(data.length - 1);
      return;
    }
    setImage(image - 1);
  }

  return (
    <Container className="about-main">
      <div className="main-images">
        <img src={data[image]} alt="someone" className="images-about" />
        <button className="next" onClick={nextButton}>
          ▶
        </button>
        <button className="prev" onClick={prevButton}>
          ◀
        </button>
      </div>
    </Container>
  );
}

export default About;

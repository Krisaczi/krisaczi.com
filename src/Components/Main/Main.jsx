import "./Main.css";
import videoBg from "../../Images/video.mp4";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  const handleVideoError = (e) => {
    console.error("Video error:", e);
  };
  return (
    <>
      <div className="container">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          id="myVideo"
          onError={handleVideoError}
        ></video>

        <div className="className">
          <Navbar />
          <div className="bcg"></div>
          <div className="content">
            <div className="content-text"></div>
          </div>
          <div className="words">
            <h1 className="page-title">Fronted Development</h1>
            <div className="intro">
              Hello World! 👋 I’m a digital architect with a passion for
              pixel-perfect designs and coding that brings static pages to life.
              I craft websites that perform flawlessly and tell compelling
              stories. Let’s make the web more beautiful and functional, one
              line of code at a time. Let’s build something amazing together!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

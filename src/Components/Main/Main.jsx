import "./Main.css";
import videoBg from "../../Images/video.mp4";

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
          <div className="bcg"></div>
          <div className="content"></div>
        </div>
      </div>
    </>
  );
};

export default Main;

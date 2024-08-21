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
      </div>
    </>
  );
};

export default Main;

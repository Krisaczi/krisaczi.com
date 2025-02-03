import "./App.css";
import Contact from "./Components/Contact/Contact";
import Main from "./Components/Main/Main";
import Stack from "./Components/Stack/Stack";

function App() {
  return (
    <>
      <Main />
      <Stack />
      <Contact />
      <div className="mobileBcg">
        <div className="mobileLogo"></div>
        <div className="mobile">Mobile version comming soon.</div>
        <div className="mobile">Please visit our desktop site.</div>
        <div className="mobile">mail: contact@krisaczi.com</div>
      </div>
    </>
  );
}

export default App;

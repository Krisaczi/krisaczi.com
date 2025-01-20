import stack from "../../data/stack";
import Navbar from "../Navbar/Navbar";
import "./Stack.css";

const Stack = () => {
  return (
    <div className="stackContainer">
      <div className="stackWrapper">
        <Navbar />
        <div className="contentStack">
          {stack.map((item) => {
            return item.display ? (
              <div className="stackBcg">
                {" "}
                <div className="stackBox">
                  <p>{item.technology} </p>
                  <div>
                    <img className="stackLogo" src={item.logo} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stack;

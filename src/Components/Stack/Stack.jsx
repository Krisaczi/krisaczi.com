import stack from "../../data/stack";
import Navbar from "../Navbar/Navbar";
import effect from "../../Images/stack-effect.png";

import "./Stack.css";

const Stack = () => {
  return (
    <div className="stackContainer">
      <div className="stackWrapper">
        <Navbar />
        <div className="contentStack">
          {stack.map((item, index) => {
            return item.display ? (
              <div className="stackBcg" key={index}>
                {" "}
                <div className="stackBox">
                  <p>{item.technology} </p>
                  <div>
                    <img
                      className="stackLogo"
                      src={item.logo}
                      alt={`${item.technology} logo`}
                    />
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

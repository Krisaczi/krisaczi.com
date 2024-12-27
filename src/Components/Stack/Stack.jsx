import stack from "../../data/stack";
import "./Stack.css";

const Stack = () => {
  return (
    <div className="wrapper">
      <div className="contentStack">
        {stack.map((item) => {
          return item.display ? (
            <div>
              {" "}
              <p>{item.technology} </p>
              <div className="stackBox">
                <img src={item.logo} alt="" />
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Stack;

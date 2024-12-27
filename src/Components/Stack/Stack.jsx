import stack from "../../data/stack";
import "./Stack.css";

const Stack = () => {
  return (
    <div className="stackWrapper">
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
  );
};

export default Stack;

import stackBcg from "../Images/landing-page1.png";
import css from "../Images/css.png";
import react from "../Images/react.png";
import html from "../Images/html.png";
import javascript from "../Images/javascript.png";

const stack = [
  {
    technology: "JavaScript",
    logo: javascript,
    backgroundImage: stackBcg,
    display: true,
  },
  {
    technology: "React",
    logo: react,
    backgroundImage: stackBcg,
    display: true,
  },
  { technology: "HTML", logo: html, backgroundImage: stackBcg, display: true },
  { technology: "CSS", logo: css, backgroundImage: stackBcg, display: true },
  {
    technology: "Typescript",
    logo: "",
    backgroundImage: stackBcg,
    display: false,
  },
  {
    technology: "Wordpress",
    logo: "",
    backgroundImage: stackBcg,
    display: false,
  },
];

export default stack;

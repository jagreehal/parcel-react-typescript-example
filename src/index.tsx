import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';

// ReactDOM.render(
//   <App name="Jag"/>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App name="Jag"/>,
  document.getElementById("root") as HTMLElement
);

// const hello = () => {
//   return "Hello World!";
// };
// // main
// const main = document.getElementById("root");
// if (main) {
//   main.textContent = hello();
// }
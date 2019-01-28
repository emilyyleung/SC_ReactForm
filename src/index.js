import React from "react";
import ReactDOM from "react-dom";

import FormBase from "./components/FormBase";

class Applet extends React.Component {
  render() {
    return (
      <div>
        <FormBase />
      </div>
    );
  }
}

ReactDOM.render(<Applet />, document.getElementById("root"));

// import object from "../data/input.json";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// var dataInput = JSON.stringify(object.data.hello);

// console.log(object);

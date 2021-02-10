import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

// let message = "";

function App() {

  return (
    <div className="App">
      <Header title="Tasks Tracker" />
      
      <Tasks />
    </div>
  );
}

// Creating class componenent
// class App extends React.Component {
//   render() {
//     return <h1>Hello from class</h1>
//   }
// }

export default App;

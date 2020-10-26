import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/navbar";
import Home from "./page/home";
import HomePageView from "./page/home/view";
import "./page/home/view.css";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const updateDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <BrowserRouter>
      <div className={`body ${isDarkMode ? "dark-mode" : ""}`}>
        <Navbar isDarkMode={isDarkMode} updateDarkMode={updateDarkMode} />
        <Route path="/" exact component={Home}></Route>
        <Route path="/details/:id" exact component={HomePageView}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

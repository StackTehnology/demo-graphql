import { FC } from "react";
import "./App.css";
import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

const App: FC = () => {
  return (
    <div className="App">
      <LaunchList />
      <LaunchProfile />
    </div>
  );
};

export default App;

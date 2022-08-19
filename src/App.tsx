import { FC, useCallback, useState } from "react";
import "./App.css";
import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

const App: FC = () => {
  const [id, setId] = useState<number>(42);

  const handleIdChange = useCallback((newId: number) => {
    console.log("Salut", newId);
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  );
};

export default App;

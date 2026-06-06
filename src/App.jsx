import { BrowserRouter } from "react-router-dom";
import "./App.css";
import YouTubeUI from "./components/YouTubeUI";

function App() {
  return (
    <BrowserRouter>
      <YouTubeUI />
    </BrowserRouter>
  );
}

export default App;

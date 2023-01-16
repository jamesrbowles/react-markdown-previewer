import { useState } from "react";

// css
import "./App.css";

// components
import Editor from "./components/Editor/Editor";
import Previewer from "./components/Previewer/Previewer";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="container">
      <Editor text={text} setText={setText} />
      <Previewer text={text} />
    </div>
  );
}

export default App;

import { marked } from "marked";
import { useState } from "react";

// css
import "./App.css";

// components
import Editor from "./components/Editor/Editor";

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith"
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  - Fourth item

  > Dorothy followed her through many of the beautiful rooms in her castle.

  ![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")

  **bold text**
  `);

  marked.setOptions({
    breaks: true,
  });
  return (
    <div className="container">
      <Editor text={text} setText={setText} />
    </div>
  );
}

export default App;

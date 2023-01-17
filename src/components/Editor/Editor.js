// css
import "./Editor.css";
import "./Previewer.css";

//markdown
import { marked } from "marked";

// icons
import { FaExpandArrowsAlt } from "react-icons/fa";

const Editor = ({ text, setText }) => {
  return (
    <div className="container-section">
      <div>
        <div className="edit-navbar">
          <h3>Editor</h3>
          {/*         add an expand icon here
           */}
          <FaExpandArrowsAlt className="expand-icon" />
        </div>
        <textarea
          id="editor"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
        <div className="previewer-section">
          <div className="prev-navbar">
            <h3>Previewer</h3>
            {/*         add an expand icon here
             */}
            <FaExpandArrowsAlt className="expand-icon" />
          </div>
          <div
            id="previewer"
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Editor;

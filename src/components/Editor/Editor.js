// css
import "./Editor.css";

const Editor = ({ text, setText }) => {
  return (
    <div className="editor-section">
      <div className="navbar">
        <h3>Editor</h3>
        {/*         add an expand icon here
         */}
        <span>expand icon</span>
      </div>
      <textarea
        id="editor"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Editor;

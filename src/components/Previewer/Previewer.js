import "./Previewer.css";
import "../Editor/Editor.css";

const Previewer = ({ text }) => {
  return (
    <div>
      <div className="previewer-section">
        <div className="navbar">
          <h3>Previewer</h3>
          {/*         add an expand icon here
           */}
          <span>expand icon</span>
        </div>
      </div>

      <div id="previewer">{text}</div>
    </div>
  );
};

export default Previewer;

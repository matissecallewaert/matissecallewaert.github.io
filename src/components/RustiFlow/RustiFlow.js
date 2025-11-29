import Window from "../Window/Window";
import "./RustiFlow.css";

const RustiFlow = ({ onClose }) => {
  return (
    <Window
      title="https://github.com/idlab-discover/RustiFlow"
      className="rustiflow"
      type="browser"
      smallPadding={true}
      onClose={() => onClose && onClose("rustiflow")}
    >
      <div>
        <a
          href="https://github.com/idlab-discover/RustiFlow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="rustiflow.png"
            alt="RustiFlow"
            style={{
              maxWidth: "100%",
              borderEndStartRadius: "20px",
              borderEndEndRadius: "20px",
            }}
          />
        </a>
      </div>
    </Window>
  );
};

export default RustiFlow;

import { useEffect, useState } from "react";
import "./index.css";
import shy_hamster from "/hamster-shy.gif";
import loppy from "/luppy.gif";

function App() {
  const NoButton = (data) => {
    const [x, setX] = useState()
    const [y, setY] = useState()
    useEffect(() => {
      setX(data.data.x)
      setY(data.data.y)
    }, [x, y])
    return (
      <button
        onClick={noButtonClicked}
        style={{
          color: "#F5F5F7",
          position: "relative",
          top: `${y}px`,
          right: `${x}px`,
        }}
        className="rounded-md bg-red-400 hover:bg-red-500 h-10 w-44"
      >
        No
      </button>
    );
  };

  const YesButton = () => {
    return (
      <button
        onClick={yesButtonClicked}
        style={{ color: "#F5F5F7" }}
        className="rounded-md bg-green-400 hover:bg-green-500 h-10 w-44"
      >
        Yes
      </button>
    );
  };

  const [NoPressed, setNoPressed] = useState(-1);
  const quotes = [
    "I think you clicked the wrong button\nlet me fix it 😁",
    "Okay weird\nyou still clicked the wrong button\nlet me move the no button for you 😁",
    "Okay weird\nyou still clicked the wrong button",
  ];
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [sayYes, setsayYes] = useState(false);

  var buttons = [
    { id: 0, button: <YesButton /> },
    { id: 1, button: <NoButton data={noButtonPosition} /> },
  ];

  function noButtonClicked() {
    if (NoPressed < 2) {
      setNoPressed((prevState) => prevState + 1);
    }
    if (NoPressed >= -1) {
      const newX = Math.floor((Math.random() * width) / 2);
      const newY = Math.floor((Math.random() * height) / 2);
      setNoButtonPosition({ "x": newX, "y": newY });
    }

  }

  function yesButtonClicked() {
    setsayYes(true);
  }


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    sayYes ? (<div className="relative h-screen" style={{ background: "#BAD6EB" }}>
      <div className="grid h-screen place-items-center">
        <div>
          <p className="text-3xl font-bold text-center" style={{ color: "#F5F5F7" }}>
            OKEI If You Inssist
          </p>
          <p className="text-3xl font-bold text-center" style={{ color: "#F5F5F7" }}>
          to be my girlfriend
          </p>
          <p className="text-s font-bold text-center" style={{ color: "#F5F5F7" }}>
          There will be no refund
          </p>
        <img src={loppy} alt="Cute Loopy" className="mt-5 w-80" />
        </div>
      </div>
    </div>) : (<div className="relative h-screen" style={{ background: "#BAD6EB" }}>
      <div className="p-2 relative">
        <div className="grid justify-center items-center">
          <div>
            <p
              className="text-3xl font-bold text-center"
              style={{ color: "#F5F5F7" }}
            >
              Hi, Crush
            </p>
            <p
              className="font-bold text-center text-xl"
              style={{ color: "#F5F5F7" }}
            >
              Will You be my girlfriend
            </p>
            <pre
              className="font-bold text-center"
              style={{ color: "#F5F5F7" }}
            >
              {quotes[NoPressed]}
            </pre>
          </div>
          <div className="flex justify-between mt-5 relative">
            {buttons.map((button) => {
              return <div key={button.id}>{button.button}</div>;
            })}
          </div>
          <img src={shy_hamster} alt="Shy Hamster" className="mt-5" />
        </div>
      </div>
    </div>)
  );
}

export default App;

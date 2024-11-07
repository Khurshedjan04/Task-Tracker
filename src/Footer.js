import React, { useState } from "react";
import "./index.css";
import Button from "./components/Button";

const Footer = () => {
  const [showHelpText, setShowHelpText] = useState(false);
  const [showHelpText2, setShowHelpText2] = useState(false);
  const [none, setnone] = useState("block");
  const [none2, setnone2] = useState("none");
  const [none3, setnone3] = useState("none");

  const handleButtonClick = () => {
    setShowHelpText(true);
    setnone("none");
    setnone2("block");
  };
  const handleButtonClick2 = () => {
    setShowHelpText2(true);
    setnone2("none");
    setnone3("block");
  };
  const handleButtonClick3 = () => {
    setShowHelpText(false);
    setShowHelpText2(false);
    setnone3("none");
    setnone("block");
  };
  return (
    <div
      className="flex flex-col items-start gap-4"
    >
      <div className="w-full flex justify-center">
        <Button
          style={{ backgroundColor: "orange", display: none }}
          btnOnClick={handleButtonClick}
          text="Help"
        />
        <Button
          style={{ backgroundColor: "orange", display: none2 }}
          btnOnClick={handleButtonClick2}
          text="What's next?"
        />
        <Button
          style={{ backgroundColor: "steelblue", display: none3 }}
          btnOnClick={handleButtonClick3}
          text="Okay"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-screen">
        {showHelpText && (
          <div className="flex items-left justify-left">
            <p className="typing-effect">
              Click 'Add' and fill the necessary spaces and click 'Submit' to
              save the task
            </p>
          </div>
        )}
        {showHelpText2 && (
          <div className=" flex justify-left">
            <p className="typing-effect effect-two">
              You can delete any taskbar by clicking the delete icon on the
              right or put a sign as a reminder by doubleclicking the taskbar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;

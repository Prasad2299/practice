import { useState } from "react";
import "./ToggleSwitch.css";
function ToggleSwitch() {
  const [isOn, setIsOn] = useState();

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  const isToggle = isOn ? "on" : "off";
  return (
    <>
      <div
        className="toggle-switch"
        style={{ backgroundColor: isOn ? "rgb(6, 198, 6)" : "" }}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${isToggle}`}>
          <span className="switch-state">{isToggle}</span>
        </div>
      </div>
    </>
  );
}

export default ToggleSwitch;

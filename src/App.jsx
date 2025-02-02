import DerivedState from "./components/DerivedState";
import EventHandling from "./components/EventHandling";
import EventProppogation from "./components/EventPropogation";
import EventProps from "./components/EventProps";
import State from "./components/hooks/State";
import Sibling from "./components/Sibling";
import LiftingUpState from "./components/LiftingUpState";
import ToggleSwitch from "./projects/ToggleSwitch";

function App() {
  return (
    <>
      {/* <div
        style={{
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
        }}
      >
        <h1>React Tut</h1>
      </div> */}
      {/* <EventHandling></EventHandling> */}
      {/* <EventProps></EventProps> */}
      {/* <EventProppogation></EventProppogation> */}
      {/* <State></State>
      <Sibling></Sibling> */}
      {/* <DerivedState></DerivedState> */}
      {/* <LiftingUpState></LiftingUpState> */}
      <ToggleSwitch></ToggleSwitch>
    </>
  );
}

export default App;

import EventHandling from "./components/EventHandling";
function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
        }}
      >
        <h1>React Practice</h1>
      </div>
      <EventHandling></EventHandling>
    </>
  );
}

export default App;

function EventProps() {
  const handlerBtn = (user) => {
    alert(`hEY ${user} ,WELCOME TO Our Site!`);
  };
  return (
    <>
      <h1>Event Props</h1>
      <Greet btnHandler={() => handlerBtn("prasad")}></Greet>
    </>
  );
}

function Greet({ btnHandler }) {
  return (
    <>
      <h1>Greet</h1>
      <button
        style={{
          border: "2px solid black",
          borderRadius: "20px",
          background: "red",
        }}
        onClick={btnHandler}
      >
        click me
      </button>
    </>
  );
}
export default EventProps;

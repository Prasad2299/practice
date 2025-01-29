import styles from "./EventHandling.module.css";
function EventHandling() {
  const handleBtnClick = (name, event) => {
    console.log("event", event);
    alert(
      `Hey,${name} you have clicked successfully!,using fat arrow function `
    );
  };
  const handleBtnClick2 = () => {
    console.log("event", event);

    alert("you have clicked successfully!,using normal function `");
  };
  return (
    <>
      <button
        className={styles.btn}
        onClick={(event) => handleBtnClick("prasad", event)}
      >
        Click me
      </button>
      <button className={styles.btn} onClick={handleBtnClick2}>
        Click me2
      </button>
    </>
  );
}

export default EventHandling;

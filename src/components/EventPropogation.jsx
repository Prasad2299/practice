import "./EventPropogation.css";
function EventProppogation() {
  const handleChild = (event) => {
    // event.stopPropagation();
    console.log("child clicked!");
  };

  const handleParent = (event) => {
    // event.stopPropagation();
    console.log("Parent clicked!");
  };

  const handleGrandParent = (event) => {
    //
    console.log("GrandParent clicked!");
  };
  return (
    <>
      {/* <section className="main-div">
        <div className="g-div" onClick={handleGrandParent}>
          <div className="p-div" onClick={handleParent}>
            <button className="c-div" onClick={handleChild}>
              CHILD ELEMENT
            </button>
          </div>
        </div>
      </section> */}
      <section className="main-div">
        <div className="g-div" onClickCapture={handleGrandParent}>
          <div className="p-div" onClickCapture={handleParent}>
            <button className="c-div" onClickCapture={handleChild}>
              CHILD ELEMENT
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventProppogation;

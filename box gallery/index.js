function Box(props) {
  const { className, text } = props;
  return (
    <div className={`box ${className}`}>
      <p>{text}</p>
    </div>
  );
}

const element = (
  <div>
    <h1>Box Gallery</h1>
    <div className="box-container">
      <Box className="mini-box" text="Mini" />
      <Box className="medium-box" text="Medium" />
      <Box className="maxi-box" text="Max" />
    </div>
  </div>
);
const rootEl=document.getElementById("root")

ReactDOM.render(element,rootEl);

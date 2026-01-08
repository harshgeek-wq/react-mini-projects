const Button = (props) => {
  const { desc, name } = props;
  return <button className={`button ${name}`}>{desc}</button>;
};

const element = (
  <div className="container">
    <h1 className="heading">Action Buttons</h1>
    <div className="button-container">
      <Button desc="Like" name="like-button" />

      <Button desc="Comment" name="comment-button" />

      <Button desc="Share" name="share-button" />
    </div>
  </div>
);
const rootElement = document.getElementById("root");
ReactDOM.render(element, rootElement);

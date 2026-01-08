const manUtdLogo = "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg";
const chelseaLogo = "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg";

function Poster() {
  return (
    <div className="poster">
      <div className="heading">European Cup</div>
      <div className="teams">
        <div className="team-logo">
          <img src={manUtdLogo} alt="Manchester United"/>
        </div>
        <div className="team-logo">
          <img src={chelseaLogo} alt="Chelsea"/>
        </div>
      </div>
      <div className="match">Manchester United V/S Chelsea</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Poster />);

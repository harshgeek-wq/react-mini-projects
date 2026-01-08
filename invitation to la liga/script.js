
function InvitationCard() {
  return (
    <div className="background">
      <div className="card">
        <h1 className="title">Invitation</h1>
        
        <img
          className="profile-img"
          src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
          alt="profile"
        />
        
        <h2 className="name">Mark Zuckerberg</h2>
        
        <p className="address">
          Harvard University, Massachusetts Hall, Cambridge, United States
        </p>
        
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
          alt="facebook logo"
        />
      </div>
    </div>
  );
}
let root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<InvitationCard /> );

import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Turbine Log App</div>
      </Link>
    </nav>
  );
}

export default Profile;
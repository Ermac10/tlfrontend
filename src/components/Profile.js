import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <>
    <div>
      <h2 className="user"> User Name </h2>
    </div>
    <nav className="nav profile-nav">
      <Link style={{textDecoration:'none', color: '#353558'}} to="/">
        <div className="nav-item">Edit Profile</div>
      </Link>
      <Link style={{textDecoration:'none', color: '#353558'}} to="/learningMaterial">
        <div className="nav-item">Learning Material</div>
      </Link>
    </nav>
    </>
  );
}

export default Profile;
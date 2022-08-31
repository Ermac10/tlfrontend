import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <>
    {/* <div>
    <h2 className="turbine-number"> Turbine # </h2>
    </div> */}
    <nav className="nav log-nav">
      <Link style={{textDecoration:'none', color: '#353558'}} to="/">
        <div className="nav-item2">Home</div>
      </Link>
      <Link style={{textDecoration:'none', color: '#353558'}} to="/logs">
        <div className="nav-item2">View Turbine Logs</div>
      </Link>
      <Link style={{textDecoration:'none', color: '#353558'}} to="/logs/newLog">
        <div className="nav-item2">Create New Log</div>
      </Link>
    </nav>
    </>
  );
}

export default Nav;
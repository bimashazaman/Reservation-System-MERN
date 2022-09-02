import './navbar.css';

const navbar = () => {
  return (
    <>
    <div className="navbar m-0 bg-slate-400">
        <div className="navContainer">
            <span className="logo">
                BiJim Reservation
            </span>
            <div className="navItems">
                <button className="navButton">
                    Register
                </button>
                <button className="navButton">
                    Login
                </button>
            </div>
        </div>
    </div>
    </>
  )
}


export default navbar
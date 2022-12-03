import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const splitPathname = location.pathname.split('/');
  const pathname = splitPathname[splitPathname.length - 1];

  return (
    <>
      <nav className="gnb">
        <div className="gnb-flex">
          <Link to='home'>
            <div id='nav-home'>
              HOME
            </div>
          </Link >
          <Link to='home/signup'>
            <div id='nav-signup'>
              SIGN UP
            </div>
          </Link >
        </div>
      </nav>
      <div className="nav-title">
        {pathname}
      </div>
    </>
  )
}

export default Nav;
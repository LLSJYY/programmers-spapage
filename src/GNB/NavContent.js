import { Link } from 'react-router-dom';

const NavContent = ({children}) => {
  console.log('')
  return (
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

  )
}

export default NavContent;
import {Link} from 'react-router-dom' 

const Nav = (props) => {
  
  return (
    <header>
      <nav className="navbar">
        <h4>Biased Book Reviews</h4>
        <Link to='/'>Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Nav
import {Link} from 'react-router-dom' 

const Nav = () => {
  
  return (
    <header>
      <nav className="navbar">
        <h2>Biased Book Reviews</h2>
        <Link to='/'>Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Nav
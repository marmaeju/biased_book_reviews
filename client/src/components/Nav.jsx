import {Link} from 'react-router-dom' 

const Nav = () => {
  
  return (
    <header>
      <nav className="navbar">
        <h2 className='title'>Biased Book Reviews</h2>
        <section className='links'>
        <Link to='/' className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        </section>
      </nav>
    </header>
  )
}

export default Nav
// --------------------------------------------------------------------------- react-router imports

import { Link } from 'react-router-dom'

// --------------------------------------------------------------------------- react-icon imports

import { FaGithub } from 'react-icons/fa6'

/**--------------------------------------------------------------------------- HeaderContainer component function
 * 
 * @name HeaderContainer
 * 
 * @function
 * 
 * @requires react-router-dom { Link }
 * @requires react-icons/fa6 { FaGithub }
 * 
 * @returns header#header-container > nav#main-nav
 * 
 * @author livingtheOKlife
 * 
 * @date 21.03.2024
 * 
 * -------------------------------------------------- */

const HeaderContainer = () => {

  // ------------------------- return

  return (

    <header id="header-container" className='logo-links'>

      <nav id="main-nav">

        <Link to='/' className="logo">

          <FaGithub />
          <h2>Github Finder</h2>

        </Link>

        <div className="links">

          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>

        </div>

      </nav>

    </header>

  )

}

// --------------------------------------------------------------------------- HeaderContainer component export

export default HeaderContainer
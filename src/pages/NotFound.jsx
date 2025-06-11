// --------------------------------------------------------------------------- react-router imports

import { Link } from 'react-router-dom'

/**--------------------------------------------------------------------------- NotFound page function
 *  
 * @name NotFound
 * 
 * @function
 * 
 * @description '/not-found' page
 * 
 * @requires react-router Link
 * 
 * @returns div.main-wrapper.not-found
 * 
 * @author livingtheOKlife
 * 
 * @date 21.03.2024
 * 
 * -------------------------------------------------- */

const NotFound = () => {

  // ------------------------- return

  return (

    <div className="main-wrapper not-found">
      <h3>Oops!</h3>
      <p>Page not found!</p>
      <Link to='/' className='btn btn-secondary-3 la'>Return to Home</Link>
    </div>

  )
  
}

// --------------------------------------------------------------------------- NotFound page export

export default NotFound
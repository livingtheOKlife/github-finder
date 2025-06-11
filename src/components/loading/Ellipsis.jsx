// --------------------------------------------------------------------------- PropTypes import

import PropTypes from 'prop-types'

/**--------------------------------------------------------------------------- Ellipsis component function
 * 
 * @name Ellipsis
 * 
 * @function
 * 
 * @description loading === true
 * @description className - 'bounce' : 'fade' : 'grow' : 'sort'
 * 
 * @requires className PropTypes.string.isRequired
 * 
 * @returns div.Ellipsis
 * 
 * @author livingtheOKlife
 * 
 * @date 20.03.2024
 * 
 * -------------------------------------------------- */

const Ellipsis = ({ className }) => {

  // ------------------------- return

  return (

    <div className={`loading-ellipsis ${className}`}>

      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>

    </div>

  )

}

// --------------------------------------------------------------------------- PropTypes declaration

Ellipsis.propTypes = {

  className: PropTypes.string.isRequired

}

// --------------------------------------------------------------------------- DefaultProps declaration

Ellipsis.defaultProps = {

  className: 'bounce'

}

// --------------------------------------------------------------------------- Ellipsis component export

export default Ellipsis
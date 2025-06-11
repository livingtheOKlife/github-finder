// --------------------------------------------------------------------------- PropTypes import

import PropTypes from 'prop-types'

/**--------------------------------------------------------------------------- Circles component function
 * 
 * @name Circles
 * 
 * @function
 * 
 * @description loading === true
 * @description className - 'sort' : 'single-orbit' : 'spiral'
 * 
 * @requires className PropTypes.string.isRequired
 * 
 * @returns div.Circles
 * 
 * @author livingtheOKlife
 * 
 * @date 20.03.2024
 * 
 * -------------------------------------------------- */

const Circles = ({ className }) => {

  // ------------------------- return

  return (

    <div className={`loading-circles ${className}`}>

      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

    </div>

  )

}

// --------------------------------------------------------------------------- PropTypes declaration

Circles.propTypes = {

  className: PropTypes.string.isRequired

}

// --------------------------------------------------------------------------- DefaultProps declaration

Circles.defaultProps = {

  className: 'bounce'

}

// --------------------------------------------------------------------------- Circles component export

export default Circles
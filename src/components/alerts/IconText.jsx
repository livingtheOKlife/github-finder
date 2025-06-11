// --------------------------------------------------------------------------- react hook imports

import { useContext } from 'react'

// --------------------------------------------------------------------------- react-icon imports

import { FaXmark } from 'react-icons/fa6'

// --------------------------------------------------------------------------- context imports

import AlertContext from '../../context/alert/AlertContext'

/**--------------------------------------------------------------------------- Alert component function
 * 
 * @name Alert
 * 
 * @function
 * 
 * @requires useContext AlertContext
 * @requires react-icons { FaMark } from 'react-icons/fa6'
 * 
 * @returns div.alert.icon-text (alert !== null)
 * 
 * @author livingtheOKlife
 * 
 * @date 22.03.2024
 * 
 * -------------------------------------------------- */

const Alert = () => {

  // ------------------------- context

  const {alert} = useContext(AlertContext)

  // ------------------------- return

  return alert !== null &&
    <div className="alert icon-text">

      <div className="icon">
        <FaXmark />
      </div>

      <p>{alert.msg}</p>

    </div>

}

// --------------------------------------------------------------------------- Alert

export default Alert
// --------------------------------------------------------------------------- react hook imports

import { createContext, useReducer } from 'react';

// --------------------------------------------------------------------------- reducer import

import alertReducer from './AlertReducer'

// --------------------------------------------------------------------------- context declaration

const AlertContext = createContext()

/**--------------------------------------------------------------------------- AlertProvider export function
 * 
 * @name AlertProvider
 * 
 * @function
 * 
 * @requires useReducer alertReducer
 * 
 * @returns AlertProvider
 * 
 * @author livingtheOKlife
 * 
 * @date 23.03.2024
 * 
 * -------------------------------------------------- */

export const AlertProvider = ({ children }) => {

  // ------------------------- const initialState

  const initialState = null

  // ------------------------- reducer

  const [state, dispatch] = useReducer(alertReducer, initialState)

  // ------------------------- setAlert

  const setAlert = (msg, type) => {

    dispatch({
      type: 'SET_ALERT',
      payload: {msg, type}
    })

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000)
    
  }

  // ------------------------- return

  return (

    <AlertContext.Provider value={{
      alert: state,
      setAlert
    }}>

      {children}

    </AlertContext.Provider>

  )

}

// --------------------------------------------------------------------------- AlertContext export

export default AlertContext
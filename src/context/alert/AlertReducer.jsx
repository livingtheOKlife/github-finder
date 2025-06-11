/**--------------------------------------------------------------------------- alertReducer function
 * 
 * @name alertReducer
 * 
 * @function
 * 
 * @requires state
 * @requires action
 * 
 * @returns action.payload (case 'SET_ALERT')
 * @returns null (case 'REMOVE_ALERT')
 * @returns state (default)
 * 
 * @author livingtheOKlife
 * 
 * @date 23.03.2024
 * 
 * -------------------------------------------------- */

const alertReducer = (state, action) => {

  switch (action.type) {

    case 'SET_ALERT':
      return action.payload

    case 'REMOVE_ALERT':
      return null

    default:
      return state

  }

}

// --------------------------------------------------------------------------- alertReducer export

export default alertReducer
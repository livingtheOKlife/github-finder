/**--------------------------------------------------------------------------- githubReducer function
 * 
 * @name githubReducer
 * 
 * @function
 * 
 * @requires state
 * @requires action
 * 
 * @returns ...state, users: action.payload, loading: false (case 'SEARCH_USERS')
 * @returns ...state, users: action.payload, loading: false (case 'GET_USER')
 * @returns ...state, users: action.payload, loading: false (case 'GET_REPOS')
 * @returns user: [] (case 'CLEAR_USERS')
 * @returns loading: true (case 'SET_LOADING')
 * @returns state (default)
 * 
 * @author livingtheOKlife
 * 
 * @date 21.03.2024
 * 
 * -------------------------------------------------- */

const githubReducer = (state, action) => {

  switch(action.type) {

    case 'SEARCH_USERS':
      return {

        ...state,
        users: action.payload,
        loading: false

      }

    case 'GET_USER_AND_REPOS':
      return {

        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false

      }

    case 'CLEAR_USERS':
      return {

        users: []

      }

    case 'SET_LOADING':
      return {

        loading: true

      }

    default:
      return state

  }

}

// --------------------------------------------------------------------------- githubReducer export

export default githubReducer
// --------------------------------------------------------------------------- react hook imports

import { createContext, useReducer } from 'react'

// --------------------------------------------------------------------------- reducer import

import githubReducer from './GitHubReducer'

// --------------------------------------------------------------------------- context declaration

const GithubContext = createContext()

/**--------------------------------------------------------------------------- GithubProvider function
 * 
 * @name GithubProvider
 * 
 * @function
 * 
 * @requires useReducer githubReducer
 * 
 * @returns GithubProvider
 * 
 * @author livingtheOKlife
 * 
 * @date 21.03.2024
 * 
 * -------------------------------------------------- */

export const GithubProvider = ({ children }) => {

  // ------------------------- initialState

  const initialState = {

    users: [],
    user: {},
    repos: [],
    loading: false

  }

  // ------------------------- reducer

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // ------------------------- return

  return (

    <GithubContext.Provider value={{

      ...state,
      dispatch,

    }}>

      {children}

    </GithubContext.Provider>

  )

}

// --------------------------------------------------------------------------- GithubContext export

export default GithubContext
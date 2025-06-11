// --------------------------------------------------------------------------- react-hook imports

import { useState, useContext } from 'react'

// --------------------------------------------------------------------------- react-icon imports

import { FaMagnifyingGlass, FaXmark } from 'react-icons/fa6'

// --------------------------------------------------------------------------- context imports

import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

// --------------------------------------------------------------------------- action imports

import { searchUsers } from '../../context/github/GithubActions'

/**--------------------------------------------------------------------------- UserSearch component function
 * 
 * @name UserSearch
 * 
 * @function
 * 
 * @requires useState react hook
 * @requires useContext GithubContext
 * @requires useContext AlertContext
 * @requires react-icons/fa6 { FaMagnifyingGlass, FaXmark }
 * 
 * @returns form.user-search
 * 
 * @author livingtheOKlife
 * 
 * @date 22.03.2024
 * 
 * -------------------------------------------------- */

const UserSearch = () => {

  // ------------------------- context

  const { dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)
  
  // ------------------------- state
  
  const [text, setText] = useState('')
  
  // ------------------------- handleSubmit

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (text === '') {

      setAlert('Please enter something', 'error')

    } else {

      dispatch({type: 'SET_LOADING'})
      const users = await searchUsers(text)
      dispatch({type: 'SEARCH_USERS', payload: users})

      setText('')

    }

  }

  // ------------------------- handleChange

  const handleChange = (e) => setText(e.target.value)

  // ------------------------- return

  return (

    <form className="form-container" onSubmit={handleSubmit}>

      <div className="form-control input-button">

        <input className='search' type="text" placeholder='Search...' value={text} onChange={handleChange} />
          
        <button disabled={text.length === 0 ? true : false} onClick={() => setText('')}>
          <FaXmark />
        </button>

      </div>
        
      <button className='icon-btn btn-secondary-3 la' type='submit' disabled={text.length === 0 ? true : false}>
        <FaMagnifyingGlass />
      </button>

    </form>

  )

}

// --------------------------------------------------------------------------- UserSearch component export

export default UserSearch
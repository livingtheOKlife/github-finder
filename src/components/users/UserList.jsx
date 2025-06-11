// --------------------------------------------------------------------------- react hook imports

import { useContext } from 'react'

// --------------------------------------------------------------------------- react-icon imports

import { FaXmark } from 'react-icons/fa6'

// --------------------------------------------------------------------------- context imports

import GithubContext from '../../context/github/GithubContext'

// --------------------------------------------------------------------------- component imports

import UserItem from './UserItem'
import Circles from '../loading/Circles'

/**--------------------------------------------------------------------------- UserList component function
 * 
 * @name UserList
 * 
 * @function
 * 
 * @requires useContext GithubContext
 * @requires react-icons { FaXmark } from 'react-icons/fa6'
 * @requires UserItem component './UserItem'
 * @requires Circles component '../Circles'
 * 
 * @returns loading ? div.loading : ul.user-list
 * 
 * @author livingtheOKlife
 * 
 * @date 21.03.2024
 * 
 * @todo 001 - bug fix
 * 
 * -------------------------------------------------- */

const UserList = () => {

  // ------------------------- context

  const {users, loading, dispatch} = useContext(GithubContext)

  // ------------------------- return

  return (

    /*

      @todo 001 - bug fix

      loading ?
        <Circles />
      : 
        <ul className="user-list">

          {
            users.length > 0 &&
              <div className="list-control">
                <button onClick={() => clearUsers()}>
                  <FaXmark />
                </button>
              </div>
          }

          {
            users.map((user, i) => (

              <UserItem user={user} key={i} />

            ))
          }

        </ul>

    */

    users === undefined & !loading ?
      <></>
    : loading ?
        <Circles className='single-orbit' />
      : 
        <ul className="user-list">

          {
            users.length > 0 &&
              <div className="list-control">
                <button className='icon-btn btn-ghost la' onClick={() => dispatch({type: 'CLEAR_USERS'})}>
                  <FaXmark />
                </button>
              </div>
          }

          {
            users.map((user, i) => (

              <UserItem user={user} key={i} />

            ))
          }

        </ul>

  )

}

// --------------------------------------------------------------------------- UserList component export

export default UserList
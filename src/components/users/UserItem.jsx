// --------------------------------------------------------------------------- PropTypes import

import PropTypes from 'prop-types'

/**--------------------------------------------------------------------------- UserItem component function
 * 
 * @name UserItem
 * 
 * @function
 * 
 * @requires user PropTypes.object.isRequired
 * 
 * @returns li.user-item
 * 
 * @author livingtheOKlife
 * 
 * @date 21.03.2024
 * 
 * -------------------------------------------------- */

const UserItem = ({ user }) => {

  // ------------------------- return
  
  return (

    <li className='user-item'>

      <div className="avatar">
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      </div>

      <div className="text-box">
        <p>{user.login}</p>
        <a href={`/user/${user.login}`}>Visit Profile</a>
      </div>

    </li>

  )

}

// --------------------------------------------------------------------------- PropTypes declaration

UserItem.propTypes = {

  user: PropTypes.object.isRequired

}

// --------------------------------------------------------------------------- UserItem component export

export default UserItem
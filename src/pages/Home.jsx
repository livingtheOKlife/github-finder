// --------------------------------------------------------------------------- component imports

import UserList from '../components/users/UserList'
import UserSearch from '../components/users/UserSearch'
import Alert from '../components/alerts/IconText'

/**--------------------------------------------------------------------------- Home page function
 * 
 * @name Home
 * 
 * @function
 * 
 * @description '/' page
 * 
 * @requires UserList component
 * @requires UserSearch component
 * @requires Alert component
 * 
 * @returns div.main-wrapper.home
 * 
 * @author livingtheOKlife
 * 
 * @date 21.03.2024
 * 
 * -------------------------------------------------- */

const Home = () => {

  // ------------------------- return

  return (

    <div className="main-wrapper home">

      <UserSearch />

      <Alert />

      <UserList />

    </div>

  )

}

// --------------------------------------------------------------------------- Home page export

export default Home
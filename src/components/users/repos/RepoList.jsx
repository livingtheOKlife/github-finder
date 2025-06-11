// --------------------------------------------------------------------------- PropTypes import

import PropTypes from 'prop-types'

// --------------------------------------------------------------------------- component imports

import RepoItem from './RepoItem'

/**--------------------------------------------------------------------------- RepoList component function
 * 
 * @name RepoList
 * 
 * @function
 * 
 * @requires repos PropTypes.array.isRequired
 * @requires RepoItem component
 * 
 * @returns ul.repo-list
 * 
 * @author livingtheOKlife
 * 
 * @date 23.03.2024
 * 
 * -------------------------------------------------- */

const RepoList = ({ repos }) => {

  // ------------------------- return

  return (

    <ul className="repo-list">

      {
        repos.map((repo) => (

          <RepoItem repo={repo} key={repo.id} />

        ))
      }
      
    </ul>

  )

}

// --------------------------------------------------------------------------- PropTypes declaration

RepoList.propTypes = {

  repos: PropTypes.array.isRequired

}

// --------------------------------------------------------------------------- RepoList component export

export default RepoList
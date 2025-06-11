// --------------------------------------------------------------------------- PropTypes import

import PropTypes from 'prop-types'

// --------------------------------------------------------------------------- react-icon imports

import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

/**--------------------------------------------------------------------------- RepoItem component function
 * 
 * @name RepoItem
 * 
 * @function
 * 
 * @requires repo PropTypes.object.isRequired
 * @requires react-icons { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
 * 
 * @returns li.repo-item
 * 
 * @author livingtheOKlife
 * 
 * @date 23.03.2024
 * 
 * -------------------------------------------------- */

const RepoItem = ({ repo }) => {

  // ------------------------- return

  return (

    <li className="repo-item">

      <a href={repo.html_url} className="repo-title">
        <FaLink />
        {repo.name}
      </a>

      <p className='repo-desc'>{repo.description}</p>

      <div className="badges">

        <div className="badge green">
          <FaEye />
          {repo.watchers_count}
        </div>

        <div className="badge orange">
          <FaStar />
          {repo.stargazers_count}
        </div>

        <div className="badge red">
          <FaInfo />
          {repo.open_issues}
        </div>

        <div className="badge purple">
          <FaUtensils />
          {repo.forks}
        </div>

      </div>

    </li>

  )

}

// --------------------------------------------------------------------------- PropTypes declaration

RepoItem.propTypes = {

  repo: PropTypes.object.isRequired

}

// --------------------------------------------------------------------------- RepoItem component export

export default RepoItem
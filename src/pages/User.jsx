// --------------------------------------------------------------------------- react hook imports

import { useEffect, useContext } from 'react'

// --------------------------------------------------------------------------- react-router imports

import { useParams, Link } from 'react-router-dom'

// --------------------------------------------------------------------------- react-icon imports

import { FaCode, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'

// --------------------------------------------------------------------------- context import

import GithubContext from '../context/github/GithubContext'

// --------------------------------------------------------------------------- action imports

import { getUserAndRepos } from '../context/github/GithubActions'

// --------------------------------------------------------------------------- component imports

import NewtonCradle from '../components/loading/NewtonCradle'
import RepoList from '../components/users/repos/RepoList'

/**--------------------------------------------------------------------------- User page functino
 * 
 * @name User
 * 
 * @function
 * 
 * @description '/user/{login}' pages
 * 
 * @requires useEffect
 * @requires useContext GithubContext
 * @requires react-router { useParams, Link }
 * @requires react-icons { FaCode, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
 * @requires NewtonCradle component
 * @requires RepoList component
 * 
 * @returns div.main-wrapper.user
 * 
 * @author livingtheOKlife
 * 
 * @date 22.03.2024
 * 
 * @todo 001 - bug fix
 * 
 * -------------------------------------------------- */

const User = () => {

  // ------------------------- context

  const {user, repos, loading, dispatch } = useContext(GithubContext)

  // ------------------------- const params

  const params = useParams()

  // ------------------------- useEffect

  useEffect(() => {

    dispatch({type: 'SET_LOADING'})

    const getUserData = async () => {

      const userData = await getUserAndRepos(params.login)
      dispatch({type: 'GET_USER_AND_REPOS', payload: userData})

    }

    getUserData()

  }, [dispatch, params.login])

  // ------------------------- return

  return (

      loading ?
        <NewtonCradle />
      :
        <div className="main-wrapper user">

          <section className='top'>

            <Link to='/' className='btn btn-ghost la'>Back to Search</Link>
          </section>

          <section className="profile">

            <div className="avatar">

              <img src={user.avatar_url} alt="" />
              
              <div className="overlay center-bottom">
                <p>{user.name}</p>
                <p>{user.login}</p>
              </div>

            </div>

            <div className="details">

              <h3>{user.name}</h3>

              <div className="badges">

                <div className="badge">{user.type}</div>

                  {
                    user.hireable &&
                      <div className="badge">hireable</div>
                  }

              </div>

              <p className='bio'>{user.bio}</p>

              <div className="link">
                <a className='btn btn-secondary-3 me' href={user.html_url} target='_blank' rel='noreferrer'>Visit Github Profile</a>
              </div>

            </div>

          </section>

          <section className="details-bar basic">

            {
              user.location &&
                <div className="detail title-value">
                  <p className='detail-title'>location</p>
                  <p className='detail-value'>{user.location}</p>
                </div>
            }

            {
              user.blog &&
                <div className="detail title-value">
                  <p className='detail-title'>website</p>
                  <a className='detail-value' href={user.blog} target='_blank' rel='noreferrer'>{user.blog}</a>
                </div>
            }

            {
              user.twitter_username &&
                <div className="detail title-value">
                  <p className='detail-title'>twitter</p>
                  <a className='detail-value' href={`https://twitter.com/${user.twitter_username}`} target='_blank' rel='noreferrer'>{user.twitter_username}</a>
                </div>
            }

          </section>

          <section className="details-bar basic">

            <div className="detail icon-title-value">

              <FaUsers className='detail-figure' />
              <p className='detail-title'>followers</p>
              <p className="detail-value">{user.followers}</p>

            </div>

            <div className="detail icon-title-value">

              <FaUserFriends className='detail-figure' />
              <p className='detail-title'>following</p>
              <p className="detail-value">{user.following}</p>

            </div>

            <div className="detail icon-title-value">

              <FaCode className='detail-figure' />
              <p className='detail-title'>public repos</p>
              <p className="detail-value">{user.public_repos}</p>

            </div>

            <div className="detail icon-title-value">

              <FaStore className='detail-figure' />
              <p className='detail-title'>public gists</p>
              <p className="detail-value">{user.public_gists}</p>

            </div>

          </section>

          <section className="repos">

            {/* 

              @todo 001 - big fix
              
              <h4>latest repositories</h4>
              <RepoList repos={repos} />

            */}

            {
              repos === undefined ?
                <h4>no repositories to display</h4>
              :
                <>
                  <h4>latest repositories</h4>
                  <RepoList repos={repos} />
                </>
            }

          </section>

        </div>
        
  )

}

// --------------------------------------------------------------------------- User page export

export default User
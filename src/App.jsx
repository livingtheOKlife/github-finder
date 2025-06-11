// --------------------------------------------------------------------------- react-router imports

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// --------------------------------------------------------------------------- provider imports

import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'

// --------------------------------------------------------------------------- page imports

import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import NotFound from './pages/NotFound'

// --------------------------------------------------------------------------- component imports

import HeaderContainer from './components/layout/HeaderContainer'
import FooterContainer from './components/layout/FooterContainer'

/**--------------------------------------------------------------------------- App application function
 * 
 * @name App
 * 
 * @function
 * 
 * @requires react-router { BrowserRouter, Routes, Route }
 * @requires GithubProvider
 * @requires AlertProvider
 * @requires Home page
 * @requires About page
 * @requires User page
 * @requires NotFound page
 * @requires HeaderContainer component
 * @requires FooterContainer component
 * 
 * @returns the contents of the application
 * 
 * @author livingtheOKlife
 * 
 * @date 21.03.2024
 * 
 * @todo 001 - create apple-touch-icon and favicon
 * 
 * -------------------------------------------------- */

function App () {

  // ------------------------- return

  return (

    <GithubProvider>
      <AlertProvider>
      
        <BrowserRouter>

          <div className="App">

            <h1>livingtheOKlife</h1>

            <HeaderContainer />

            <main id="main-container">

              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/not-found' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
              
            </main>

            <FooterContainer />

          </div>

        </BrowserRouter>

      </AlertProvider>
    </GithubProvider>

  )

}

// --------------------------------------------------------------------------- App application export

export default App
/**--------------------------------------------------------------------------- About page function
 * 
 * @name About
 * 
 * @function
 * 
 * @description '/about' page
 * 
 * @returns div.main-wrapper.about
 * 
 * @author livingtheOKlife
 * 
 * @date 21.03.2024
 * 
 * -------------------------------------------------- */

const About = () => {

  // ------------------------- return

  return (

    <div className="main-wrapper about">

      <h3>Github Finder</h3>
      <p>Version 1.0.0</p>

      <div className="divider div-secondary-3 div-sm"></div>

      <p>A React app to search Github profiles and see profile details. This project is part of the <a href="https://www.udemy.com/course/react-front-to-back-2022/">React Front to Back</a> Udemy course by <a href="https://traversymedia.com">Brad Traversy.</a></p>
      <p>In the course, <a href="https://traversymedia.com">Brad Traversy</a> uses layouts and styles created by <a href="https://twitter.com/hassibmoddasser">Hassib Moddasser</a>. They chose to use Tailwind to make styling their application quicker and easier. However, I have been building a SASS library of my own called OKSS. So I decided to trial my own library here instead.</p>

    </div>

  )

}

// --------------------------------------------------------------------------- About page export

export default About
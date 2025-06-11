/**--------------------------------------------------------------------------- FooterContainer component function
 * 
 * @name FooterContainer
 * 
 * @function
 * 
 * @returns footer#footer-container.brand-copyright
 * 
 * @author livingtheOKlife
 * 
 * @date 21.03.2024
 * 
 * -------------------------------------------------- */

const FooterContainer = () => {

  // ------------------------- const year

  const year = new Date().getFullYear()

  // ------------------------- return

  return (

    <footer id="footer-container" className='brand-copyright'>

      <h6>livingthe<em>OK</em>life</h6>

      <p>Copyright &copy; {year} All rights reserved</p>
      
    </footer>

  )

}

// --------------------------------------------------------------------------- FooterContainer component export

export default FooterContainer
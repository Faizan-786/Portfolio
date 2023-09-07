import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../images/cheerful-young-caucasian-businessman_171337-727-removebg-preview.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
<>
<header>
  <div className='container header_container'>
    <h5>Hello,I'm</h5>
    <h1>Faizan ALi Akbar</h1>
    <h5 className='text-light'>Fullstack Developer</h5>
    <CTA />
    <HeaderSocial />
    <div className='me'>
      <img src={me} alt='My PIc' className='me'/>
    </div>
    <a href='#contact' className='scroll_down'> Scroll Down</a>



  </div>
</header>

</>
  )
}

export default Header
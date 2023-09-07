import React from 'react'
import './about.css'
import AboutImage from '../../images/aboutImage.avif';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

function About() {
  return (
<section id='about'>
<h5>Get To Know</h5>
<h2>About Me</h2>
<div className='container about_container'>
  <div className="about_me">
    <div className="about_me_image">
    <img src={AboutImage} alt='AboutImage' className='myimage'></img>
    </div>
  </div>
  <div className="about_content">
    <div className="about_cards">
      <article className='about_card'>
        <FaAward  className='about_icon'/>
        <h5>Experience</h5>
        <small>3+ Years Working</small>
      </article>

      <article className='about_card'>
        <FiUsers  className='about_icon'/>
        <h5>Clients</h5>
        <small>200+ WorldwIde</small>
      </article>

      <article className='about_card'>
        <VscFolderLibrary  className='about_icon'/>
        <h5>Projects</h5>
        <small>80+ Completed</small>
      </article>
    </div>
    <p className='pe'>I am a highly skilled and experienced web developer with a strong background in creating professional and dynamic websites. With expertise in HTML, CSS, JavaScript, and various web development frameworks,
       I have successfully delivered numerous projects, meeting client expectations and surpassing industry standards.
    </p>
    <div className='aboutbtn'>
    <a href='#contact' className='btn btn-primary '>Lets's Talk</a>
    </div>
 
  </div>
</div>
</section>
  )
}

export default About
import React from 'react';
import './intro.css';
import bg from '../../assets/me.png';
import btnImg from "../../assets/hireme.png";
import {Link} from 'react-scroll';
import { useTypewriter , Cursor} from "react-simple-typewriter";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["Tech Enthusiast.", "Web Developer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello!</span>
            <span className='introText'>	&nbsp;I'm <span className='introName'>Lokesh</span></span><span>&nbsp;{text}<span style={{color:'yellow'}}><Cursor/></span></span>
            <p className='introPara'>I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websites.</p>
            <div>
            <Link><button className='btn1' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}><img src={btnImg} className='btnImg' alt='Hire me'/>Hire Me</button></Link>

        <button className='btn1' onClick={() => {
          window.open('https://drive.google.com/file/d/1aritK5NI2akGWEnHk6GEmcxCVVJ4KjeQ/view?usp=sharing','_blank')
        }}>My CV</button>


            </div>
            
        
        
        
        </div>
        <div>
        <img src={bg} alt='Profile' className='bg' />
        </div>
    </section>
  )
}

export default Intro
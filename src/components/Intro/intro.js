import React from 'react';
import './intro.css';
import bg from '../../assets/me.png';
import btnImg from "../../assets/hireme.png";
import {Link} from 'react-scroll';
import { useTypewriter , Cursor} from "react-simple-typewriter";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'>I'm <span className='introName'>Lokesh</span><div>{text}</div></span>
            <p className='introPara'>I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websites.</p>
            <Link><button className='btn'><img src={btnImg} className='btnImg' alt='Hire me'/>Hire Me</button></Link>
        </div>
        <div>
        <img src={bg} alt='Profile' className='bg' />
        </div>
    </section>
  )
}

export default Intro
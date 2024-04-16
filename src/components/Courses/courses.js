import React from 'react';
import oracle from '../../assets/oracle.png';
import './courses.css';

const Courses = () => {
  return (
    <section id='courses'>
        <span className='couTitle'>Courses and Certification</span>
        <div className='couBars'>
            <div className='couBar'>
                <a href='https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_333' target='_blank'> 
                <img src={oracle} className='couBarImg' alt='Oracle'/></a>
                <div className='couBarText'>
                    <h2>Oracle Certified Java Programmer</h2>
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default Courses
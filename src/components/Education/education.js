import React from 'react';
import './education.css';
import cbit from '../../assets/cbit.png';
import narayana from '../../assets/narayana.png';
import shine from '../../assets/shine.jpeg'


function Education() {
  return (
    <section id='edu'>
        <span className='eduTitle'>My Education</span>
        <div className='eduBars'>
            <div className='eduBar'>
                <a href='https://www.cbit.ac.in/' target='_blank'><img src={cbit} alt='cbit' className='eduBarImg'/></a>
                <div className='eduBarText'>
                    <h2>Chaitanya Bharathi Institute Of Technology</h2>
                    <p>B.E Computer Science and Engineering</p>
                    <p> CGPA: 10</p>                    
                </div>
            </div>
            <div className='eduBar'>
                <a href='https://www.narayanagroup.com/'target='_blank'><img src={narayana} alt='narayana' className='eduBarImg'/></a>
                <div className='eduBarText'>
                    <h2>Narayana Junior College</h2>
                    <p>MPC</p>
                    <p>Percentage: 98.6%</p>
                </div>
            </div>
            <div className='eduBar'>
            <a href='https://shinehighschools.ac.in/' target='_blank'><img src={shine} alt='shine' className='eduBarImg'/></a>
                <div className='eduBarText'>
                    <h2>Shine High School</h2>
                    <p>CGPA: 10</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Education
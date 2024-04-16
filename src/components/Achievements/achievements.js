import React from 'react';
import jeemain from '../../assets/jeemain.jpeg';
import jeeadv from '../../assets/jeeadvance.png';
import tseamcet from '../../assets/tseamcet.jpeg';
import shruthi from '../../assets/shruthi.jpeg'
import './achievements.css';

const Achievements = () => {
  return (
    <section id='edu'>
        <span className='eduTitle'>My Achievements</span>
        <div className='eduBars'>
            <div className='eduBar'>
                <a href='https://tseamcet.nic.in/default.aspx' target='_blank'><img src={jeemain} alt='jeemain' className='eduBarImg'/></a>
                <div className='eduBarText'>
                    <h2>Joint Entrance Examination Mains 2021</h2>
                    <p>Percentile: 93.6 AIR: 51269</p>
                </div>
            </div>
            <div className='eduBar'>
                <a href='https://jeemain.nta.nic.in/about-jeemain-2023/'target='_blank'><img src={jeeadv} alt='jeeadvance' className='eduBarImg'/></a>
                <div className='eduBarText'>
                    <h2>Joint Entrance Examination Advanced 2021</h2>
                    <p>AIR: 28872</p>
                </div>
            </div>
            <div className='eduBar'>
            <a href='https://jeeadv.ac.in/' target='_blank'><img src={tseamcet} alt='tseamcet' className='eduBarImg'/></a>
                <div className='eduBarText'>
                    <h2>TS-EAMCET 2021</h2>
                    <p>Rank: 2726</p>
                </div>
            </div>
            <div className='eduBar'>
            <a href='https://jeeadv.ac.in/' target='_blank'><img src={shruthi} alt='tseamcet' className='eduBarImg'/></a>
                <div className='eduBarText'>
                    <h2>Shruthi Annual Cricket Tournament 2023</h2>
                    <p>2nd Place in 26 teams.</p>
                </div>
            </div>
            <div className='eduBar'>
            <a href='https://jeeadv.ac.in/' target='_blank'><img src={shruthi} alt='tseamcet' className='eduBarImg'/></a>
                <div className='eduBarText'>
                    <h2>Shruthi Annual Sports Meet</h2>
                    <p>Overall Department Championship winner.</p>
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default Achievements
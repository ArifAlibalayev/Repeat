import React from 'react'
import './index.scss'
import CountUp from 'react-countup';


function StatsSection() {
  return (
    <section id='StatsSection'>
      <h2>Stats</h2>
      <div className="countUpContainer">
        <div className="countUpBox">
        <i class="fa-regular fa-handshake"></i>
        <CountUp start={1}
  end={230}
  duration={2}
  separator=" "
  style={{fontSize:"48px",color:"#003a70",display:"block"}}
  />
  <p>Projects</p>
        </div>
        <div className="countUpBox">
        <i class="fa-solid fa-arrow-pointer"></i>
        <CountUp start={1}
  end={350}
  duration={2}
  separator=" "
  style={{fontSize:"48px",color:"#003a70",display:"block"}}
  />
  <p>Happy Clients</p>
        </div>
        <div className="countUpBox">
        <i class="fa-regular fa-thumbs-up"></i>
        <CountUp start={1}
  end={8}
  duration={2}
  separator=" "
  style={{fontSize:"48px",color:"#003a70",display:"block"}}
  />
  <p>Leadership</p>
        </div>
        <div className="countUpBox">
        <i class="fa-solid fa-computer-mouse"></i>
        <CountUp start={1}
  end={15}
  duration={2}
  separator=" "
  style={{fontSize:"48px",color:"#003a70",display:"block"}}
  />
  <p>Years Experience</p>
        </div>
      </div>
      
    </section>
  )
}

export default StatsSection
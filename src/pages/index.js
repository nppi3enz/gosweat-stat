import React from "react"
// import { Link } from "gatsby"
import { Chart } from "react-charts"

import SEO from "../components/seo"
import Particles from 'react-particles-js'  

import ViewCount from "../components/viewCount"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import ReactGA from 'react-ga';

import "../components/layout.css"

ReactGA.initialize('UA-123099315-1');
ReactGA.pageview('/');

const lineChart = (
  <div
    style={{
      width: "400px",
      height: "300px"
    }}
  >
    <Chart
      data={[
        {
          label: "Series 1",
          data: [[0, 1], [1, 2], [2, 4], [2, 2], [4, 7]]
        },
        {
          label: "Series 2",
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
      ]}
      axes={[
        { primary: true, type: "linear", position: "bottom" },
        { type: "linear", position: "left" }
      ]}
    />
  </div>
);

const IndexPage = () => (
  <div>
    <SEO title="Stat ชาไข่มุก (Bubble Tea) - Sweat16!" keywords={[`bubble`, `tea`, `sweat16`]} />
    <div
      id="particles-js"
    >
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 60,
	            "density": {
	                "enable": false
	            }
          },
          "color": {
            "value":  ["#4aebe3","#fc96d0","#fdea68","#69bee9"]
          },
          "opacity": {
            "value": 1,
            "anim": {
              "enable": false
            }

          },
	        "size": {
	            "value": 30,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 10
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 3,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": false,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": false,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	        }
	    }
  }}>
  </Particles>
  <div
    id="front"
    >
    <div id="logo">
      <img src={require('../images/logo.png')} height="200px"/>
    </div>
    <ViewCount
      />
    
    <a className="youtube-btn" href="https://www.youtube.com/watch?v=1k9uvhTw9Fc" target="_blank">
      <FontAwesomeIcon icon={faYoutube} />&nbsp;
       Play Youtube
    </a>
  </div>
  </div>
    {/* <div >
      { lineChart }
    </div> */}
  </div>
)

export default IndexPage

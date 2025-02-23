import React, {useRef} from "react";
import adt from './assets/adt.jpg';
import colosseum from './assets/colosseum.jpg';
import pov1 from './assets/pov1.jpg';
import pov2 from './assets/pov2.jpg';
import pov_resize from './assets/pov_resize.jpg';
import pov_uncrop from './assets/pov_uncrop.jpg';
import raphael_rooms from './assets/raphael_rooms.jpg';
import roland_garros from './assets/roland_garros.jpg';
import roman_forums from './assets/roman_forums.jpg';

import computer_icon from "./assets/computer-front.png";
import growth_icon from "./assets/growth_presentation.png";
import rocket_icon from "./assets/rocket.png"
import data_storage_icon from "./assets/data_storage.jpeg"

import { Navbar } from "./components/Navbar";

import './App.css';

function App() {
  const caption = 'HELLO, I\'M ADIT';
  const fadeImages = [
    {
      url: colosseum,
      caption: caption
    },
    {
      url: pov1,
      caption: caption
    },
    {
      url: pov2,
      caption: caption
    },
    {
      url: raphael_rooms,
      caption: caption
    },
    {
      url: pov_resize,
      caption: caption
    },
    {
      url: pov_uncrop,
      caption: caption
    },
    {
      url: adt,
      caption: caption
    },
    {
      url: roland_garros,
      caption: caption
    },
    {
      url: roman_forums,
      caption: caption
    },
  ];
  
  const title = "Senior ML/AI Engineer";
  const whoamI = "Who am I?"

  const aboutMe = "Relentless Innovator, Problem-Solver, and Go-Getter";
  const aboutMeLine1 = "I’m Adit Chawdhary, a passionate Machine Learning Engineer who thrives on solving complex problems with cutting-edge AI and data-driven solutions. With a strong foundation in software engineering and deep learning, I love turning ideas into impactful innovations. Whether it's optimizing algorithms, building scalable data pipelines, or developing intelligent systems, I approach every challenge with curiosity, creativity, and a results-driven mindset.";
  const aboutMeLine2 = "I believe in the power of technology to transform industries and push boundaries. My journey has taken me across diverse domains, from ad tech to financial systems, where I’ve had the opportunity to work on high-impact projects that blend machine learning, cloud computing, and big data. I’m always eager to collaborate, experiment, and push the limits of what’s possible. If you’re looking for someone who’s all about innovation, execution, and making things happen, let’s connect!";
  
  const HorizontalRule = ({color}) => (
    <hr
        style={{
            "color": "gainsboro",
            "backgroundColor": !!color ? color:"gainsboro",
            "width": "7rem",
            "height": "3px",
            "border": "0px"
        }}
    />
  );
  const aboutMeRef = useRef(null);
  const coreCompetenciesRef = useRef(null);

  return (
    <div className="App">
      <Navbar aboutMeRef={aboutMeRef} coreCompetenciesRef={coreCompetenciesRef} />
      
      <div style={{  
              backgroundImage: "url(" + fadeImages[8].url + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              minWidth: "90%",
              minHeight: "100vh",
              marginTop: "-77px"
            }}>
          

          <div className='helloCaptionContainer'>
              <div className="helloCaption" style={{fontSize: "4.5rem", fontWeight: "bold"}}>
                {fadeImages[0].caption}
              </div>
              <HorizontalRule />
              <div className="helloCaption">
                {title}
              </div>
              <div className="helloCaptionButton" onClick={() => aboutMeRef.current.scrollIntoView({ behavior: "smooth" })} >
                {whoamI}
              </div>
          </div>
        </div>
      <div ref={aboutMeRef} className="aboutMe">
        <h2 className="text-3xl font-bold mb-4">
          {aboutMe}
        </h2>
        <HorizontalRule />
        <p className="mb-4">
          {aboutMeLine1}
        </p>
        <p className="mb-4">
          {aboutMeLine2}
        </p>
      </div>
      <div className="WhyMeHeading" ref={coreCompetenciesRef}>
        Core Competencies
      </div>
      <HorizontalRule color={"rgb(82, 115, 140)"}/>
      <div className="WhyMeContainer">
            <div className="WhyMeItem">
              <img src={computer_icon}  height="100px" />
              <h2>
                Business & Product
              </h2>
              <p>
                Driving revenue growth and strategic decision-making by optimizing machine learning-driven monetization and recommendation systems.
              </p>
            </div>
            <div className="WhyMeItem">
              <img src={data_storage_icon} height="100px" />
              <h2 >
                Data
              </h2>
              <p style={{"marginTop":"60px"}}>
                Building scalable data platforms and pipelines to process petabyte-scale datasets, enabling real-time analytics and business insights.
              </p>
            </div>
            <div className="WhyMeItem">
              <img src={growth_icon} height="100px" />
              <h2>
                ML & AI Leader
              </h2>
              <p style={{"paddingTop":"30px"}}>
                Leading the design and deployment of AI-powered solutions that enhance performance, efficiency, and user engagement.
              </p>
            </div>
            <div className="WhyMeItem">
              <img src={rocket_icon} height="70px" style={{"marginTop":"10px"}} />
              <h2 style={{"marginTop":"15px"}}>
                Building & Scaling Production ML Systems
              </h2>
              <p style={{"marginTop":"-10px"}}>
                Architecting and optimizing end-to-end ML workflows, from model development to deployment and monitoring in large-scale environments.
              </p>
            </div>
      </div>
      <div style={{marginTop:"7000px"}}>
          PROJECTS
      </div>
      <div>
          CONTACTS
      </div>
    </div>
  );
}

export default App;

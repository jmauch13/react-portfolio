/*import React from 'react';
import zenImage from "../../assets/zen.png";
import quizImage from "../../assets/quiz.png";
import weatherImage from "../../assets/weather.png";
import schedulerImage from "../../assets/scheduler.png";
import upcycleImage from "../../assets/upcycle.png";

const portfolioPages = [
    {
        name: 'The Zen Project',
        image: zenImage
    },
    { 
        name: 'Upcycle', 
        image: upcycleImage,
    
    },
    
    { 
        name: 'Weather Dashboard', 
        image: weatherImage
    },
    { 
        name: 'Code Quiz', 
        image: quizImage
    },
    { 
        name: 'Work Day Scheduler', 
        image: schedulerImage
    },
  ];


function Portfolio() {


  return (
    
    <div>
        <section>
            <h1 className="page-header">Portfolio</h1>
        </section>

        <div className="portfolio-page">
            {portfolioPages.map((portfolioPage) => (
                <div className="portfolio-image">
                    <img src={portfolioPage.image} style={{ width: "50%", height: "30%"}} alt="Portfolio item preview screencap." />
                    <p className="header-format">{portfolioPage.name}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Portfolio;*/

import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section className="container">
          <div className="project">
            <h2 className="page-header">Portfolio</h2>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;
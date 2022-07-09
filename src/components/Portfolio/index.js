import React from 'react';
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
        image: upcycleImage
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
            <h1 id="portfolio">Portfolio</h1>
        </section>

        <div className="page-header">
            {portfolioPages.map((portfolioPage) => (
                <div className="portfolio-image">
                    <img src={portfolioPage.image} alt="Portfolio item preview screencap." />
                    <p className="header-format">{portfolioPage.name}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Portfolio;
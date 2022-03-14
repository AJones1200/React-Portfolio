import React from 'react';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  const projects = [
    {title: "QuotePics", githubLink: "https://github.com/The-ABC-Crew/Quote-pics", deployedLink: "https://the-abc-crew.github.io/Quote-pics/", image: "./QP\ Screenshot.jpg", description: ""},
    {title: "WeatherApp", githubLink: "https://github.com/AJones1200/WeatherApp", deployedLink: "https://ajones1200.github.io/WeatherApp/", image: "./WA\ Screenshot.jpg", description: ""},
    {title: "DailyPlanner", githubLink: "https://github.com/AJones1200/Homework05", deployedLink: "https://ajones1200.github.io/Homework05/", image: "./DP\ Screenshot.jpg", description: ""},
    {title: "TennantBuddy", githubLink: "https://github.com/Dog-with-two-Gs/tenant-buddy", deployedLink: "https://tenant-buddy.herokuapp.com/", image: "./TenBud\ Screenshot.jpg", description: ""},
    {title: "TechBlog", githubLink: "https://github.com/AJones1200/Homework14", deployedLink: "https://serene-sierra-12890.herokuapp.com/", image: "./TechBlog.png", description: ""},
    {title: "Portfolio", githubLink: "https://github.com/AJones1200/Homework02", deployedLink: "https://ajones1200.github.io/Homework02/", image: "./Portfolio.png", description: ""}

  ]
  return (
    <div className='projectContainer'>
      <h1>Project Page</h1>
      {projects.map(project =>(<ProjectCard project= {project}/>))}
     {/* create project card based on 20:8:Card and Display*/}

    </div>
  );
}

import React from 'react';
import ProjectCard from '../ProjectCard';
import QP from '../../images/QP Screenshot.jpg'
import WA from '../../images/WA Screenshot.jpg'
import DP from '../../images/DP Screenshot.jpg'
import TenBud from '../../images/TenBud Screenshot.jpg'
import TechBlog from '../../images/TechBlog.png'
import Portfolio from '../../images/Portfolio.png'
export default function Projects() {
  const projects = [
    {title: "QuotePics", 
    githubLink: "https://github.com/The-ABC-Crew/Quote-pics", 
    deployedLink: "https://the-abc-crew.github.io/Quote-pics/", 
    image: QP, 
    description: "App that generates a random quote over a picture."},
    {title: "WeatherApp", githubLink: "https://github.com/AJones1200/WeatherApp", deployedLink: "https://ajones1200.github.io/WeatherApp/", image: WA, description: "App that shows the user a 5-day weather forecast."},
    {title: "DailyPlanner", githubLink: "https://github.com/AJones1200/Homework05", deployedLink: "https://ajones1200.github.io/Homework05/", image: DP, description: "App that gives the user an hourly daily planner."},
    {title: "TennantBuddy", githubLink: "https://github.com/Dog-with-two-Gs/tenant-buddy", deployedLink: "https://tenant-buddy.herokuapp.com/", image: TenBud, description: "App that gives tenants of a building the ability to reserve laundry machines."},
    {title: "TechBlog", githubLink: "https://github.com/AJones1200/Homework14", deployedLink: "https://serene-sierra-12890.herokuapp.com/", image: TechBlog, description: "App that allows users to post and comment on others' posts."},
    {title: "Portfolio", githubLink: "https://github.com/AJones1200/Homework02", deployedLink: "https://ajones1200.github.io/Homework02/", image:  Portfolio , description: "App which shows my favorite projects."}
  ]
  return (
    <div className='projectContainer'>
      <h1>Project Page</h1>
      {projects.map(project =>(<ProjectCard project= {project}/>))}
     {/* create project card based on 20:8:Card and Display*/}
    </div>
  );
}

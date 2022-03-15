import React from 'react';

export default function ProjectCard(props) {
  return (
    <div className= "cards">
      <h1>{props.project.title}</h1>
      <img src= {props.project.image} alt={props.project.title}/>
      <p>{props.project.description}</p>
      <div className='links'>
      <a href = {props.project.deployedLink}>deployed link</a>
      <a href = {props.project.githubLink}>github link</a>
      </div>
     {/* create project card based on 20:8:Card and Display*/}

    </div>
  );
}

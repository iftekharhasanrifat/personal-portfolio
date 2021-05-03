import React, { useEffect } from 'react';
import './Project.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Project = ({project}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])
    return (
        <div data-aos='flip-left' className='project-card text-center m-4'>
            <img width='300px' height='220px' src={project.img} alt=""/>
            <h3 className='text-white pt-4'>{project.title}</h3>
            <p className='text-white pt-4'>{project.description}</p>
            <a className='btn btn-outline-success me-2' target="_blank" href={project.live}>Live</a>
            <a className='btn btn-outline-success me-2' target="_blank" href={project.client}>Client</a>
            {
                project.server && <a className='btn btn-outline-success' target="_blank" href={project.server}>Server</a>
            }
        </div>
    );
};

export default Project;
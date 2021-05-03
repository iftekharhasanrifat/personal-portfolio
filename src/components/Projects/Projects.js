import React, { useEffect } from 'react';
import Project from '../Project/Project';
import './Projects.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
const projects = [{
    id:'1a',
    title:'Smart Grocery Shop',
    description: 'It is a MERN stack web application where you can order grocery items online easily. If you click on buy now button you will be redirected to login page and after login you can buy products, can see your order as a consumer and you can add, manage product to your shop as an admin.',
    img: 'https://i.ibb.co/px17FNw/screencapture-smart-grocery-shop-9d275-web-app-2021-05-01-22-05-16.png',
    live: 'https://smart-grocery-shop-9d275.web.app/',
    client: 'https://github.com/iftekharhasanrifat/smart-grocery-shop-client',
    server: 'https://github.com/iftekharhasanrifat/smart-grocery-shop-server'
},
{
    id:'2a',
    title:'Smart Ride Bangladesh',
    description: 'It will let you order for a ride to visit through the city. You can check for the prices and number of sit available for the person. If you click on the vehicles, you will be redirected to login page if you are not logged in. After logging in you can order for a ride. You can see the google map in this for navigation.',
    img: 'https://i.ibb.co/R69b3vs/Screenshot-86.png',
    live: 'https://urban-rider-authentication.web.app/',
    client: 'https://github.com/iftekharhasanrifat/smart-ride-bangladesh',
    server: ''
},
{
    id:'3a',
    title:'UEFA Champions League',
    description: 'This Project will let you know about the teams of UEFA Champions League .It is pretty fun. You can know about your favorite teams. If you click the explore button you can get the details of teams. You can navigate to their social media by the social media icons in the footer.',
    img: 'https://i.ibb.co/dtVkcKb/screencapture-uefa-champions-league-react-netlify-app-2021-05-01-22-10-46.png',
    live: 'https://uefa-champions-league-react.netlify.app/',
    client: 'https://github.com/iftekharhasanrifat/uefa-champions-league',
    server: ''

}
]
const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])
    return (
        <div data-aos="fade-right" style={{overflowX:'hidden'}} id='projects' className='pt-5 pb-5'>
            <h2  className='text-white text-center mt-5 mb-5 fw-bold'>My <span className='green-effect'>Projects</span></h2>
            <div className='project-container'>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;
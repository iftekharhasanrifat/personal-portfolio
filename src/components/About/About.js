import React, { useEffect } from 'react';
import './About.css'
import profile from '../../image/iftekhar1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css'
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div style={{overflowX:'hidden'}} id='about'>
            <div className="text-center">
                <h2 className="text-white fw-bold"><span className='green-effect'>About</span> Me</h2>
                <img data-aos='fade-right' className='profile-pic rounded-circle mt-3' src={profile} height="300px" alt="" />
            </div>
            <div data-aos='fade-left' style={{ width: '60%', margin: '0 auto' }} className='text-white text-justify mt-3 pb-3'>
                <p className="">Hello , I'm Iftekhar Hasan. I am a MERN stack web developer. I love to learn new technologies.My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am currently pursuing a degree in Bachelor’s of Computer Science and Engineering at International Islamic University Chittagong. </p>
            </div>
            <div className="text-center pb-5">
                <h4 className="text-white">Follow me</h4>
                <div className="icon-container">
                    <a target="_blank" href="https://www.facebook.com/IftekarHasan97/" className="me-2"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a target="_blank" href="https://github.com/iftekharhasanrifat" className="me-2"><FontAwesomeIcon icon={faGithubSquare} /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/iftekhar-hasan-6a73951b9/" className="me-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <a className="btn btn-outline-success" href="">MY Skills</a>
            </div>
        </div>
    );
};

export default About;
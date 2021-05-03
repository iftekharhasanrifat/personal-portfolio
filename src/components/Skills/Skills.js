import React, { useEffect } from 'react';
import './Skills.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const frontend = ['JavaScript', 'React JS', 'HTML', 'CSS', 'Bootstrap', 'Material UI'];
const backend = ['Express JS', 'Node JS', 'MongoDB', 'MS SQL'];
const others = ['C#', 'ASP.NET', 'C++', 'Python']
const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div data-aos="zoom-in" style={{overflowX:'hidden'}}>
            <h2 className='text-center text-white mb-4 fw-bold'>My <span className='green-effect'>Skills</span></h2>
            <div className='my-skills'>

                <div className="skill-card">
                    <h4 className='text-white'>Front End</h4>
                    <div className='skill-container mt-4'>
                        {
                            frontend.map(singleSkill => <div className="skills text-white m-1 p-2">{singleSkill}</div>)
                        }
                    </div>
                </div>
                <div className="skill-card">
                    <h4 className='text-white'>Back End</h4>
                    <div className='skill-container mt-4'>
                        {
                            backend.map(singleSkill => <div className="skills text-white m-1 p-2">{singleSkill}</div>)
                        }
                    </div>
                </div>
                <div className="skill-card">
                    <h4 className='text-white'>Others</h4>
                    <div className='skill-container mt-4'>
                        {
                            others.map(singleSkill => <div className="skills text-white m-1 p-2">{singleSkill}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
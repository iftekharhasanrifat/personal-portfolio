import React from 'react';
import './Skills.css'
const frontend = ['JavaScript', 'React JS', 'HTML', 'CSS', 'Bootstrap', 'Material UI'];
const backend = ['Express JS', 'Node JS', 'MongoDB', 'MS SQL'];
const others = ['C#', 'ASP.NET', 'C++', 'Python']
const Skills = () => {
    return (
        <div className='my-skills'>
            <div className="skill-card">
                <h4 className='text-white'>Front End</h4>
                <div className='skill-container mt-4'>
                    {
                        frontend.map(singleSkill=><div className="skills text-white m-1 p-2">{singleSkill}</div>)
                    }
                </div>
            </div>
            <div className="skill-card">
                <h4 className='text-white'>Back End</h4>
                <div className='skill-container mt-4'>
                    {
                        backend.map(singleSkill=><div className="skills text-white m-1 p-2">{singleSkill}</div>)
                    }
                </div>
            </div>
            <div className="skill-card">
                <h4 className='text-white'>Others</h4>
                <div className='skill-container mt-4'>
                    {
                        others.map(singleSkill=><div className="skills text-white m-1 p-2">{singleSkill}</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;
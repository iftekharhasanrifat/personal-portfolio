import React from 'react';
import './Header.css';
import Typical from 'react-typical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <section style={{marginTop:'100px'}}className="header text-center mb-5">
            <h1 className="text-light">Iftekhar <span className='green-effect'>Hasan</span></h1>
            <h3 className="text-white">I am a
                    <Typical className="green-effect" 
                    loop={Infinity} 
                    wrapper="b"
                    steps={[
                        ' Web Developer',
                        3000,
                        ' Tech Lover',
                        3000,
                        ' Programmer',
                        3000,
                        " Learner",
                        3000,
                        " Gamer",
                        3000
                    ]}
                    />
            </h3>
            <div>
                <a className="btn btn-outline-success" target="_blank" href="https://www.linkedin.com/in/iftekhar-hasan-6a73951b9/">Hire me </a>
                <a className="btn btn-success ms-2" target="_blank" href='https://drive.google.com/uc?export=download&id=10JQ5o75BlmmsIXs4STXMpoZ8Nqkq4MSW'><FontAwesomeIcon icon={faFileDownload} /> Download Resume</a>
            </div>

        </section>
    );
};

export default Header;
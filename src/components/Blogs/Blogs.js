import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Blogs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])
    return (
        <div style={{overflowX:'hidden'}} data-aos='zoom-in-left' id='blogs' className='pb-5'>
            <h2 className='text-center text-white fw-bold'>My <span className='green-effect'>Blogs</span></h2>
            <h3 className='text-center text-white mt-5'>Blogs Coming Soon ...</h3>
        </div>
    );
};

export default Blogs;
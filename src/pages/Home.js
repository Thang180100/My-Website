import React from 'react';
import home from '../assets/home.jpg'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${home})` }}>
            {/* <div className='headerContainer'>
                <img src={banner} />
            </div> */}
        </div>
    );
}

export default Home;
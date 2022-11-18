import React from 'react';
import './Home.css'
import Hero from '../Components/Hero/Hero';
import Teacher from '../Components/Teacher/Hero';






const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="service-provide container">
                <h1>Popular courses</h1>
                
                <ul>
                    <li>
                        
                        <h5>Computer Programming Basic</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis porro sit optio iure, rerum distinctio tempora blanditiis cum nam voluptates, officia natus, quae tempore enim mollitia minima quis molestias corrupti.</p>
                    </li>
                    <li>
                       
                        <h5>Web-site Development Pro</h5>
                        <p>Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning HTML, CSS, and JavaScript. Then, master the back-end and APIs to round out your full-stack skills.</p>
                    </li>
                    <li>
                      
                        <h5>Computer CSS3 Programming</h5>
                        <p>Doloremque dolore corporis cupiditate unde laboriosam distinctio totam vel, ab provident est quibusdam animi eligendi laborum ducimus in? Veniam incidunt qui quod iusto, illo vitae praesentium recusandae laboriosam consectetur .</p>
                    </li>
                </ul>
            </div>
            <Teacher></Teacher>
        </div>
    );
};

export default Home;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './LiftSideNav.css'

const LiftSideNav = () => {

    const [category, setcategory] = useState([]);

    useEffect(() => {
        fetch('https://edu-server-tau.vercel.app/courses-category')
            .then(res => res.json())
            .then(data => setcategory(data));
    }, [])
    return (
        <div>
            <h4>All Courses</h4>
            {
                category.map(category => <p key={category.id}>
                    <Link to={`/details/${category.id}`}>{category.name}</Link>

                </p>)
            }
        </div>
    );
};

export default LiftSideNav;

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Category.css'

const Category = () => {
    const courses = useLoaderData();

    return (
        <div>
            <h2>Courses:{courses.length}</h2>
        </div>
    );
};

export default Category;
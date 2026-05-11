import React from 'react';

const CourseCard = () => {
    return (
        <div>
            <h1>Course Title</h1>
            <p>Course description goes here. This is a brief overview of what the course is about.</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>View Details</button>
        </div>
    );
};

export default CourseCard;
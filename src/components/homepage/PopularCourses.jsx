import React from 'react';

const PopularCourses = () => {
    return (
        <div className='container mx-auto px-4 py-8 my-20'>
            <h1 className='text-4xl font-bold text-center mb-8'>Popular Courses</h1>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <li>Each card shows:
                    Image
                    Course Title
                    Instructor
                    Rating
                    View Details button
                </li>
                <li>React for Beginners</li>
                <li>Advanced JavaScript</li>
                <li>Python Data Science</li>
                <li>Full-Stack Web Development</li>
            </ul>
        </div>
    );
};

export default PopularCourses;
import React from 'react';

const TrendingCourses = () => {
    return (
        <div className='container mx-auto px-4 py-8 my-20'>
            <h1 className='text-4xl font-bold text-center mb-8'>Trending Courses</h1>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <li>Each card shows:
                    Image
                    Course Title
                    Instructor
                    Rating
                    View Details button
                </li>
                <li>Machine Learning Fundamentals</li>
                <li>UI/UX Design Principles</li>

            </ul>
        </div>
    );
};

export default TrendingCourses;
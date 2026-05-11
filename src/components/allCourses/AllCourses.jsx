import React from 'react';
import CourseCard from './CourseCard';

const AllCourses = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-6'>
            <h1 className='text-4xl font-bold text-center mb-8'>All Courses</h1>
            <CourseCard />

        </div>
    );
};

export default AllCourses;
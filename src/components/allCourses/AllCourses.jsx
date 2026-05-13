import React from 'react';
import CourseCard from './CourseCard';

const AllCourses = async () => {

    const res = await fetch('http://localhost:3000/data.json');

    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }

    const data = await res.json();

    return (
        <div className='w-full flex flex-col items-center justify-center gap-6'>

            <h1 className='text-4xl font-bold text-center mb-8'>
                All Courses
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    data.map(course => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))
                }

            </div>

        </div>
    );
};

export default AllCourses;
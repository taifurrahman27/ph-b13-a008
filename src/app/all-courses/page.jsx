import AllCourses from '@/components/allCourses/AllCourses';
import React from 'react';

const AllCoursesPage = () => {
    return (
        <div className=' container mx-auto flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
            <h1 className='text-5xl font-bold text-center my-8'>All Courses</h1>
            <AllCourses />

        </div>
    );
};

export default AllCoursesPage;
import React from 'react';

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "params id");

    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-8'>All Courses</h1>
            <p>This is the page for displaying course details: {id}</p>
        </div>
    );
};

export default CourseDetailsPage;
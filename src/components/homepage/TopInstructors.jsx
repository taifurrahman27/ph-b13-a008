import React from 'react';

const TopInstructors = () => {
    return (
        <div className='container mx-auto px-4 py-8 my-20'>
            <h1 className='text-4xl font-bold text-center mb-8'>Top Instructors</h1>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <li>Each instructor card shows:
                    Profile Image
                    Name
                    Title
                    Bio
                    View Profile button
                </li>
                <li>John Doe</li>
                <li>Jane Smith</li>
                <li>Bob Johnson</li>
                <li>Alice Williams</li>
            </ul>
        </div>
    );
};

export default TopInstructors;
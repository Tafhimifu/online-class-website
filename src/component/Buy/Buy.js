import React from 'react';
import './Buy.css';
import fakeData from '../../fakeData/it';

import { useState } from 'react';
import Courses from '../Courses/Courses';
import Mycourse from '../Mycourse/Mycourse';

const Buy = () => {
    const courses = fakeData.slice(0,5)
    const [course ,setCourse] = useState(courses);
    const [cart,setCart]=useState([]);
    const handleAddCourse = (course) =>{
        const newCart = [...cart,course];
         setCart(newCart);

    }
    return (
        <div className="buy-container">
            <div className="course-container">{
                courses.map(course => <Courses 
                    handleAddCourse={handleAddCourse} course={course}></Courses>)
                }</div>

              <div className="cart-container">
                <Mycourse cart={cart}></Mycourse>
            </div>
                   
        </div>
    );
};

export default Buy;
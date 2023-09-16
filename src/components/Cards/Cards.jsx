import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleAddToCarts}) => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCourses(data));
    },[]);

    return (
        <div className="grid grid-cols-3 gap-4 gap-x-8">
            {
                courses.map((course, idx) => <Card handleAddToCarts={handleAddToCarts} key={idx} course={course}></Card>)
            }
        </div>
    );
};

export default Cards;
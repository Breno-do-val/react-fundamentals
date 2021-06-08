import * as React from 'react';
import students from '../../data/students';

export default props => {

    const studentListItem = students.map((student) => {
        return (
            <li key={ student.key }>
                { student.id }) { student.name } - { student.grade } 
            </li>
        )
    }) 
    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                { studentListItem }
            </ul>
        </div>
    )
}
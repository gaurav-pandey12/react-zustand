import React from "react"
import useCourseStore from "../app/courseStore"


export default function CourseList() {

    const { courses, removeCourse } = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus
        })
    )

    return (
        <div>
            <ul>
                {courses.map((course, i) => {
                    return (
                        <React.Fragment key={i}>
                            <li>
                                <span>{course?.title}</span>
                                <button onClick={() => {
                                    removeCourse(course.id)
                                }}>Delete</button>
                            </li>
                        </React.Fragment>
                    )
                })}
            </ul>
        </div>
    )
}
import useCourseStore from "../app/courseStore"
import { useState } from "react"

export default function CourseForm() {

    const addCourse = useCourseStore((state) => state.addCourse)
    const [courseTitle, setCourseTitle] = useState("")

    console.log("courseForm");

    const handleCourseSubmit = () => {
        if (!courseTitle) return alert("Please add a course title")
        else {
            addCourse({
                id: Math.ceil(Math.random() * 10000),
                title: courseTitle
            })
            setCourseTitle("")
        }

    }

    return (
        <div>
            <input
                type="text"
                value={courseTitle}
                onChange={(e) => { setCourseTitle(e.target.value) }}
            />
            <button onClick={handleCourseSubmit}>Add course</button>
        </div>
    )
}
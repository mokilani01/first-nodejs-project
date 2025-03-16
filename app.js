let students = ["mohammad", "rami", "ahmad"];
let courses = [
    {
        courseName: "Node JS",
        duration: "60H",
        dateOfStarting: "12-12-2025"
    },
    {
        courseName: "arabic",
        duration: "50H",
        dateOfStarting: "20-10-2025"
    },
    {
        courseName: "math",
        duration: "40H",
        dateOfStarting: "15-08-2025"
    }
];

function getCourseByName(courseName) {
    const course = courses.find(course => course.courseName.toLowerCase() === courseName.toLowerCase());
    if (course) {
        return course;
    } else {
        return "Course not found.";
    }
}

function addCourse(courseName, duration, dateOfStarting) {
    const newCourse = {
        courseName,
        duration,
        dateOfStarting
    };
    courses.push(newCourse);
    console.log(`Course ${courseName} has been added .`);
}

function studentRequestCourse(studentName, courseName) {
    if (!students.includes(studentName)) {
        return `Student ${studentName} not found.`;
    }
    
    const course = getCourseByName(courseName);
    
    if (course === "Course not found.") {
        return `Sorry, ${studentName}. The course ${courseName} is not available.`;
    }

    return `Hello ${studentName}, here are the details for the course "${courseName}":
    - Duration: ${course.duration}
    - Date of Starting: ${course.dateOfStarting}`;
}

//testing
console.log(studentRequestCourse("momhammad", "Node js"));
console.log(studentRequestCourse("rami", "arabic"));

addCourse("Python", "50H", "01-01-2026");
console.log(studentRequestCourse("ahmad", "Python"));
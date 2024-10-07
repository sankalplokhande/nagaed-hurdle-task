const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON

// Sample in-memory list of courses
let courses = [
    { id: 1, title: "Math 101", description: "Basic math concepts", duration: "10 weeks" },
    { id: 2, title: "History 101", description: "World history overview", duration: "8 weeks" },
];

// Endpoint to get all courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

// Endpoint to add a new course
app.post('/courses', (req, res) => {
    const newCourse = {
        id: courses.length + 1,
        title: req.body.title,
        description: req.body.description,
        duration: req.body.duration
    };
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

// Endpoint to update a course by ID
app.put('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return res.status(404).send('Course not found');
    }

    course.title = req.body.title || course.title;
    course.description = req.body.description || course.description;
    course.duration = req.body.duration || course.duration;

    res.json(course);
});

// Endpoint to delete a course by ID
app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === courseId);

    if (courseIndex === -1) {
        return res.status(404).send('Course not found');
    }

    const deletedCourse = courses.splice(courseIndex, 1);
    res.json(deletedCourse);
});

// Start the server
app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});

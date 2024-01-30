package org.launchcode.sprinklespre.controller.api;

import org.launchcode.sprinklespre.models.Course;
import org.launchcode.sprinklespre.models.data.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//TODO: Create some data in MySQL
//TODO: Git pull and start using CourseController
//TODO: Test get all Courses

@CrossOrigin(origins = "http://localhost:5173", maxAge = 5800)
@RestController
@RequestMapping("/courses")
public class ApiCourseController {
    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public ResponseEntity<?> getAllCourses() {
        List<Course> courses = (List<Course>) courseRepository.findAll();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCourseById(@PathVariable Integer id) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()){
            return new ResponseEntity<>(courseOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<String> processAddCourseForm(@RequestBody Course course){
        //TODO: put data into CourseRepository
        return ResponseEntity.ok("this is a response");
    }
}

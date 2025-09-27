export default class Student {
  constructor(name) {
    this.name = name;
    this.courses = [];
  }

  enrollIn(course) {
    this.courses.push(course);
    course.addStudent(this);
  }

  showCourses() {
    return this.courses.map((c) => c.name);
  }
}

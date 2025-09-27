export default class Course {
  constructor(name, code) {
    this.name = name;
    this.code = code;
    this.students = [];
  }

  addStudent(name) {
    return this.students.push(name);
  }

  showStudents() {
    return this.students.map((s) => s.name);
  }
}

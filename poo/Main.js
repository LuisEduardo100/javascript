// Relação N:N (muitos para muitos)
import Course from './Course.js';
import Student from './Student.js';

const courseJS = new Course('JS', 'JS101');
const courseRuby = new Course('Ruby', 'RB101');

const S1 = new Student('Luís');
const S2 = new Student('David');
const S3 = new Student('Olavo');

// courseJS.addStudent(S1);
// courseJS.addStudent(S2);
// courseJS.addStudent(S3);

S1.enrollIn(courseJS);
S1.enrollIn(courseRuby);
S2.enrollIn(courseJS);
S2.enrollIn(courseRuby);
S2.enrollIn(courseJS);
S3.enrollIn(courseRuby);

// console.log(S1);
// console.log(S2);
// console.log(S3);

// console.log(courseJS);
// console.log(courseRuby);

// console.log(`Cursos de ${S1.name}: ${S1.showCourses()}`);
// console.log(`Alunos do curso ${courseJS.name}: ${courseJS.showStudents()}`);

console.log(`Cursos de ${S1.name}: `, S1.showCourses());
console.log(`Alunos do curso ${courseJS.name}: ${courseJS.showStudents()}`);

import { Student } from "./student";
import { StudentManager } from "./student_manager";


let student_manager = new StudentManager();
let student = new Student("hieu","C08",10,10);
let student1 = new Student("ieu","C08",1,0);
let student2 = new Student("eu","C08",10,1);

student_manager.addStudent(student);
student_manager.addStudent(student1);
student_manager.addStudent(student2);


console.log(student_manager.showStudent())

console.log(student_manager.showRank())

console.log()
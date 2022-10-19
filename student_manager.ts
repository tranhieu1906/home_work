import { Student } from "./student";
export class StudentManager {
    student: Student[] = [];
    constructor() { }
    addStudent(student: Student): void {
        this.student.push(student);
    }
    showStudent() {
        return this.student
    }
    totalStudent(): number {
        return this.student.length
    }


    showRank(){
        let size = this.student.length;
        for (let i = 0; i < size - 1; i++) {
            let min_idx = i;
            for (let j = i + 1; j < size; j++) {
                if (this.student[j].totalAve() < this.student[min_idx].totalAve()) {
                    min_idx = j;
                }
            }
            let temp = this.student[i];
            this.student[i] = this.student[min_idx];
            this.student[min_idx] = temp;
        }
        return this.showStudent()
    }
    searchByName(name: string) {
        let arr: Student[] = [];
        for (let i = 0; i < this.student.length; i++) {
            if (this.student[i].name === name) {
                arr.push(this.student[i])
            }
        }
        return arr
    }
    searchByGroup(group: string) {
        let arr: Student[] = [];
        for (let i = 0; i < this.student.length; i++) {
            if (this.student[i].group === group) {
                arr.push(this.student[i])
            }
        }
        return arr
    }
}





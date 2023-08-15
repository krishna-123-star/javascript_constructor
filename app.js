class Student {
    constructor() {
        this.rollno = '';
        this.course = '';
        this.duration = '';
        this.startDate = '';
        this.endDate = '';
        this.grade = '';
    }

    getRollno() {
        return this.rollno;
    }
    setRollno(newRollno) {
        this.rollno = newRollno;
    }

    getCourse() {
        return this.course;
    }
    setCourse(newCourse) {
        this.course = newCourse;
    }

    getDuration() {
        return this.duration;
    }
    setDuration(newDuration) {
        this.duration = newDuration;
    }

    getStartDate() {
        return this.startDate;
    }
    setStartDate(newStartDate) {
        this.startDate = newStartDate;
    }

    getEndDate() {
        return this.endDate;
    }
    setEndDate(newEndDate) {
        this.endDate = newEndDate;
    }

    getGrade() {
        return this.grade;
    }
    setGrade(newGrade) {
        this.grade = newGrade;
    }
}

const student = new Student();

student.setRollno('1');
student.setCourse('Computer Science');
student.setDuration('4 years');
student.setStartDate('2022-09-01');
student.setEndDate('2026-09-01');
student.setGrade('A');

console.log('Roll No:', student.getRollno());
console.log('Course:', student.getCourse());
console.log('Duration:', student.getDuration());
console.log('Start Date:', student.getStartDate());
console.log('End Date:', student.getEndDate());
console.log('Grade:', student.getGrade());

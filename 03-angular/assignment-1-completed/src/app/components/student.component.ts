import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'student',
  templateUrl: 'student.component.html',
})
export class StudentComponent  { 
    studentName: string;
    studentEmail: string;
    pointsScored: number;
    pointsPossible: number;
    percent: number;
    grade: string;
    iName: string;
    iScoredPoints: number;
    iPossiblePoints: number;
    assignmentList: Assignment[];

    constructor() {
        this.studentName = "Bob Smith";
        this.studentEmail = "bobsmith@gmail.com"
        this.pointsScored = 0;
        this.pointsPossible = 0;
        this.percent = 0;
        this.grade = 'N/A';
        this.assignmentList = [];
    }

    addAssignment(): void {
        let assignment: Assignment;
        let assignmentPercent = this.iScoredPoints / this.iPossiblePoints;

        assignment = {
            name: this.iName,
            pointsScored: this.iScoredPoints,
            pointsPossible: this.iPossiblePoints,
            percent: assignmentPercent,
            iGrade: this.getGrade(assignmentPercent)
        }

        this.assignmentList.push(assignment);
        this.updatePerformance();
    }

    deleteAssignment(num: number): void {
        this.assignmentList.splice(num, 1);
        this.updatePerformance()
    }

    updatePerformance() {
        if (this.assignmentList.length === 0) {
            this.pointsPossible = 0;
            this.pointsScored = 0;
            this.percent = 0;
            this.grade = 'N/A';
        }
        else {
            this.pointsPossible = this.assignmentList.reduce(this.addPointsPossible, 0);
            this.pointsScored = this.assignmentList.reduce(this.addPointsScored, 0);
            this.percent = this.pointsScored / this.pointsPossible;
            this.grade = this.getGrade(this.percent);
        }
    }

    private getGrade(percent: number): string {
        if (percent >= 0.9)
            return 'A';
        else if (percent >= .8 )
            return 'B';
        else if (percent >= .7 )
            return 'C';
        else if (percent >= .6 )
            return 'D';
        else 
            return 'F';
    }

    private addPointsPossible(tally: number, assignment: Assignment) {
        return tally + assignment.pointsPossible;
    }

    private addPointsScored(tally: number, assignment: Assignment) {
        return tally + assignment.pointsScored;
    }
}

interface Assignment {
    name: string;
    pointsScored: number;
    pointsPossible: number;
    percent: number;
    iGrade: string;
}